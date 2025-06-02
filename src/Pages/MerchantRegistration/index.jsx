import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Button from '../../components/Modules/Button'
import { createNewMerchant } from '../../utils/Merchant/createNewMerchant'
import { isOpenModalAtom } from '../../jotai/atoms'
import { useAtom } from 'jotai'
import PopUpModal from '../../components/Modules/Modals'
import TextField from '../../components/Modules/Textfield'
import TextArea from '../../components/TextArea'

const MerchantPage = () => {


    const [merchantName, setMerchantName] = useState("")
    const [merchantAddress, setMerchantAddress] = useState("")
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    useEffect(() => {

    }, [])

    const clearField = async () => {
        setMerchantName("")
        setMerchantAddress("")
        document.getElementById("Merchant Name").value = ""
        document.getElementById("large-input").value = ""
    }

    const submit = async () => {

        const data = {
            merchant_name: merchantName,
            merchant_address: merchantAddress
        }

        const response = await createNewMerchant(data)


        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }


    }

    return (
    <DefaultLayout>

            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                <label>Merchant Registration</label>
                </div>

            <form class="max-w-sm mx-auto">

                    <TextField
                        textFieldName={"Merchant Name"}
                        setValue={setMerchantName}
                    />

                    <TextArea
                        textAreaLabel={"Merchant Address"}
                        setValue={setMerchantAddress}
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
                message={"New Merchant Registration Success!"} />
    </DefaultLayout>
    )
}

export default MerchantPage
