import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import TextArea from '../../components/TextArea'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../jotai/atoms'
import { createNewPG } from '../../utils/PaymentGateway/createNewPaymentGateway'
import PopUpModal from '../../components/Modules/Modals'
const PaymentGatewayRegistration = () => {

    const [pgName, setPgName] = useState("")
    const [pgCode, setPgCode] = useState("")
    const [pgSecret, setPgSecret] = useState("")
    const [pgAddress, setPgAddress] = useState("")
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    useEffect(() => {


    }, [])

    const submit = async () => {

        const data = {
            payment_gateway_name: pgName,
            pg_code: pgCode,
            secret_key: pgSecret,
            pg_address: pgAddress
        }

        const response = await createNewPG(data)
        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }

    }

    const clearField = () => {
        setPgName("")
        setPgCode("")
        setPgSecret("")
        setPgAddress("")
        document.getElementById("Payment Gateway Name").value = ""
        document.getElementById("Payment Gateway Code").value = ""
        document.getElementById("Secret Key").value = ""
        document.getElementById("large-input").value = ""
    }

    return (
        <DefaultLayout>
            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Payment Gateway Registration</label>
                </div>

                <form class="max-w-sm mx-auto">

                    <TextField
                        textFieldName={"Payment Gateway Name"}
                        setValue={setPgName}
                    />
                    <TextField
                        textFieldName={"Payment Gateway Code"}
                        setValue={setPgCode}
                    />
                    <TextField
                        textFieldName={"Secret Key"}
                        setValue={setPgSecret}
                    />
                    <TextArea
                        textAreaLabel={"Payment Gateway Address"}
                        setValue={setPgAddress}
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



            </div>

            <PopUpModal
                modalTitle={"Success"}
                message={"New Payment Gateway Registration Success!"}
            />

        </DefaultLayout>
    )
}

export default PaymentGatewayRegistration