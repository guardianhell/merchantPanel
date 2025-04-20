import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Button from '../../components/Modules/Button'
import TextField from '../../components/Modules/Textfield'
import DropDownList from '../../components/Modules/DropDownList'
import { getAllActivePaymentGateway } from '../../utils/PaymentGatewayChannel/getPaymentGatewayChannel'
import { createNewPaymentChannel } from '../../utils/PaymentChannel/createNewPaymentChannel'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../jotai/atoms'
import PopUpModal from '../../components/Modules/Modals'

const RegisterPaymentChannel = () => {


    const [pgChannelList, setPgChannelList] = useState([])
    const [pgChannelId, setPgChannelId] = useState("")
    const [selectedPgChannelIndex, setPgChannelIndex] = useState("")

    const [paymentName, setPaymentName] = useState("")
    const [bank, setBank] = useState("")
    const [accountName, setAccountName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [paymentFee, setPaymentFee] = useState("")
    const [timelimit, setTimelimit] = useState("")
    const [minAmount, setMinAmount] = useState("")
    const [maxAmount, setMaxAmount] = useState("")


    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    const submit = async () => {

        const data = {
            payment_name: paymentName,
            payment_gateway_channel_id: pgChannelId,
            bank: bank,
            account_name: accountName,
            account_number: accountNumber,
            payment_fee_to_pg: paymentFee,
            timelimit_payment: timelimit,
            min_amount: minAmount,
            max_amount: maxAmount,
            currency_id: pgChannelList[selectedPgChannelIndex].currency_id
        }

        const response = await createNewPaymentChannel(data)


        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }
    }

    const clearField = () => {

        setPgChannelId("")
        setPgChannelIndex("")

        setPaymentName("")
        setBank("")
        setAccountName("")
        setAccountNumber("")
        setPaymentFee("")
        setTimelimit("")
        setMinAmount("")
        setMaxAmount("")

        document.getElementById("Payment Name").value = ""
        document.getElementById("Currency").value = ""
        document.getElementById("Bank").value = ""
        document.getElementById("Account Name").value = ""
        document.getElementById("Account Number").value = ""
        document.getElementById("Payment Fee to Payment Gateway").value = ""
        document.getElementById("Timelimit Payment in Seconds").value = ""
        document.getElementById("Minimum Amount").value = ""
        document.getElementById("Maximum Amount").value = ""

    }

    useEffect(() => {
        getAllActivePaymentGateway().then((result) => {
            setPgChannelList(result.data.data)
        })

    }, [])

    useEffect(() => {

        if (pgChannelId) {
            setPgChannelIndex(document.getElementById("Payment Gateway Channel").selectedOptions[0]["index"])
        }

    }, [pgChannelId])



    return (
        <DefaultLayout>

            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Payment Channel Registration</label>
                </div>

                <form class="max-w-sm mx-auto">

                    <DropDownList
                        dropDownText={"Payment Gateway Channel"}
                        dataList={pgChannelList}
                        field={"channel_name"}
                        setValue={setPgChannelId}
                    />


                    <TextField
                        textFieldName={"Currency"}
                        defaultValue={
                            selectedPgChannelIndex !== "" ? pgChannelList[selectedPgChannelIndex]["currency_name"] : ""
                        }
                        disabled={true}
                    />

                    <TextField
                        textFieldName={"Payment Name"}
                        setValue={setPaymentName}
                    />


                    <TextField
                        textFieldName={"Bank"}
                        setValue={setBank}
                    />

                    <TextField
                        textFieldName={"Account Name"}
                        setValue={setAccountName}
                    />

                    <TextField
                        textFieldName={"Account Number"}
                        setValue={setAccountNumber}
                    />

                    <TextField
                        textFieldName={"Payment Fee to Payment Gateway"}
                        setValue={setPaymentFee}
                    />

                    <TextField
                        textFieldName={"Timelimit Payment in Seconds"}
                        setValue={setTimelimit}
                    />

                    <TextField
                        textFieldName={"Minimum Amount"}
                        setValue={setMinAmount}
                    />

                    <TextField
                        textFieldName={"Maximum Amount"}
                        setValue={setMaxAmount}
                    />


                    <div className='flex justify-center items-center mt-20 gap-4'>


                        <Button
                            action={"submit"}
                            buttonAction={submit}
                            buttonText={"Submit"} />
                        <Button
                            action={"clear"}
                            buttonAction={clearField}
                            buttonText={"Clear"} />
                    </div>

                </form>



            </div>


            <PopUpModal
                modalTitle={"Success"}
                message={"New Payment Channel Registration Success!"} />


        </DefaultLayout >
    )
}

export default RegisterPaymentChannel