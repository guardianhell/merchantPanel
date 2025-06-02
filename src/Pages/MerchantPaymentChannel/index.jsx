import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import PopUpModal from '../../components/Modules/Modals'
import DropDownList from '../../components/Modules/DropDownList'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import { getAllMerchant } from '../../utils/Merchant/getAllMerchant'
import { getAllActivePaymentChannel } from '../../utils/PaymentChannel/getAllActivePaymentChannel'
import { addMerchantPaymentChannel } from '../../utils/Merchant/addMerchantPaymentChannel'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../jotai/atoms'

const AddMerchantPaymentChannel = () => {

    const [merchantList, setMerchantList] = useState([])
    const [paymentChannelList, setPaymentChannelList] = useState([])
    const [selectedMerchantId, setSelectedMerchantId] = useState("")
    const [selectedPaymentChannelIndex, setSelectedPaymentChannelIndex] = useState("")
    const [selectedCurrencyId, setSelectedCurrencyId] = useState("")
    const [paymentChannelId, setPaymentChannelId] = useState("")

    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)


    const [merchantPaymentFee, setMerchantPaymentFee] = useState("")
    const [merchantWithdrawalFee, setMerchantWithdrawalFee] = useState("")


    const submit = async () => {

        const data = {
            merchant_id: selectedMerchantId,
            payment_channel_id: paymentChannelId,
            merchant_payment_fee: merchantPaymentFee,
            merchant_withdrawal_fee: merchantWithdrawalFee,
            currency_id: paymentChannelList[selectedPaymentChannelIndex - 1]["id"]
        }

        console.log(data);


        const response = await addMerchantPaymentChannel(data)

        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }


    }

    const clearField = () => {

        setSelectedMerchantId("")
        setPaymentChannelId("")
        setSelectedPaymentChannelIndex("")
        setMerchantPaymentFee("")
        setMerchantWithdrawalFee("")

        document.getElementById("Merchant Payment Fee").value = ""
        document.getElementById("Merchant Withdrawal Fee").value = ""






    }

    useEffect(() => {
        getAllMerchant().then((result) => {
            setMerchantList(result.data.data)
        })

        getAllActivePaymentChannel().then((result) => {
            console.log(result);

            setPaymentChannelList(result.data.data)
        })

    }, [])

    useEffect(() => {

        if (paymentChannelId) {


            // console.log(document.getElementById("Payment Channel").selectedOptions[0]["index"]);
            // console.log("Currency");
            // console.log(paymentChannelList);

            setSelectedPaymentChannelIndex(document.getElementById("Payment Channel").selectedOptions[0]["index"])
        }

    }, [paymentChannelId])


    return (
        <DefaultLayout>


            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Merchant Payment Channel</label>
                </div>

                <form class="max-w-sm mx-auto">

                    <DropDownList
                        dropDownText={"Merchant Name"}
                        dataList={merchantList}
                        field={"merchant_name"}
                        setValue={setSelectedMerchantId}
                    />

                    <DropDownList
                        dropDownText={"Payment Channel"}
                        dataList={paymentChannelList}
                        field={"payment_name"}
                        setValue={setPaymentChannelId}
                    />

                    <TextField
                        textFieldName={"Currency"}
                        disabled={true}
                        defaultValue={
                            selectedPaymentChannelIndex !== "" ? paymentChannelList[selectedPaymentChannelIndex - 1]["currency_name"] : ""
                        }
                    />

                    <TextField
                        textFieldName={"Payment Fee to PG"}
                        disabled={true}
                        defaultValue={
                            selectedPaymentChannelIndex !== "" ? paymentChannelList[selectedPaymentChannelIndex - 1]["payment_fee_to_pg"] : ""
                        }
                    />

                    <TextField
                        textFieldName={"Merchant Payment Fee"}
                        setValue={setMerchantPaymentFee}
                    />

                    <TextField
                        textFieldName={"Merchant Withdrawal Fee"}
                        setValue={setMerchantWithdrawalFee}
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
                message={"Merchant Payment Channel Successfuly added!"}
            />
        </DefaultLayout>
    )
}

export default AddMerchantPaymentChannel