import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import DropDownList from '../../components/Modules/DropDownList'
import { getAllActiveCurrency } from '../../utils/Currency/getCurrency'
import { getAllActivePaymentGateway } from '../../utils/PaymentGateway/getPaymentGateway'
import { createNewPGChannel } from '../../utils/PaymentGatewayChannel/createNewPGChannel'
import PopUpModal from '../../components/Modules/Modals'
import { isOpenModalAtom } from '../../jotai/atoms'
import { useAtom } from 'jotai'

const RegisterPaymentGatewayChannel = () => {

    const [currencies, setCurrency] = useState([])
    const [pgList, setPgList] = useState([])
    const [selectedCurrencyId, setSelectedCurrencyId] = useState('')
    const [selectedPgId, setSelectedPgId] = useState('')
    const [pgChannelName, setPgChannelName] = useState('')
    const [paymentChannelId, setPaymentChannelId] = useState('')
    const [mintrx, setMinTrx] = useState('')
    const [maxtrx, setMaxTrx] = useState('')
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    const clearField = async () => {
        setSelectedCurrencyId("")
        setSelectedPgId("")
        document.getElementById("Payment Channel Name").value = null
        document.getElementById("Payment Channel ID").value = null
        document.getElementById("Minimum Transaction Amount").value = null
        document.getElementById("Maximum Transaction Amount").value = null
    }

    const submit = async () => {
        const data = {
            channel_name: pgChannelName,
            channel_id: paymentChannelId,
            currency_id: selectedCurrencyId,
            payment_gateway_id: selectedPgId,
            min_amount: mintrx,
            max_amount: maxtrx
        }

        const response = await createNewPGChannel(data)


        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }
    }

    useEffect(() => {
        getAllActiveCurrency().then((result) => {
            setCurrency(result.data.data)
        })

        getAllActivePaymentGateway().then((result) => {
            setPgList(result.data.data)
        })

    }, [])


    return (
        <DefaultLayout>
            <div className='my-10 flex items-center justify-center text-2xl'>
                <label>Payment Gateway Channel Registration</label>
            </div>

            <form class="max-w-sm mx-auto">

                <DropDownList
                    dropDownText={"Payment Gateway"}
                    dataList={pgList}
                    field={"payment_gateway_name"}
                    setValue={setSelectedPgId} />

                <TextField
                    textFieldName={"Payment Channel Name"}
                    setValue={setPgChannelName}
                />
                <TextField
                    textFieldName={"Payment Channel ID"}
                    setValue={setPaymentChannelId}
                />
                <DropDownList
                    dropDownText={"Currency"}
                    dataList={currencies}
                    field={"currency_name"}
                    setValue={setSelectedCurrencyId}
                />
                <TextField
                    textFieldName={"Minimum Transaction Amount"}
                    setValue={setMinTrx}
                />
                <TextField
                    textFieldName={"Maximum Transaction Amount"}
                    setValue={setMaxTrx}
                />





                <div className='flex justify-center items-center mt-20'>
                    <Button
                        action={"submit"}
                        buttonText={"Submit"}
                        buttonAction={submit}
                    />
                    <Button
                        action={"Clear"}
                        buttonText={"Clear"}
                        buttonAction={clearField}

                    />


                </div>

            </form>

            <PopUpModal
                modalTitle={"Success"}
                message={"New Payment Gateway Channel Registration Success!"}
            />

        </DefaultLayout>
    )
}

export default RegisterPaymentGatewayChannel