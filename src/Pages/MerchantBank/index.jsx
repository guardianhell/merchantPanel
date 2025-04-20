import React, { useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../jotai/atoms'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'

const MerchantBankPage = () => {

    const [bankName, setBankName] = useState("")
    const [accountName, setAccountName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)


    const clearField = () => {
        setBankName("")
        setAccountName("")
        setAccountNumber("")
        document.getElementById("Bank Name").value = ""
        document.getElementById("Account Name").value = ""
        document.getElementById("Account Number").value = ""
    }

    return (
    <DefaultLayout>

            <div className='mt-10'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                <label>Merchant Bank Registration</label>
                </div>

            <form class="max-w-sm mx-auto">

                    <TextField
                        textFieldName={"Bank Name"}
                        setValue={setBankName}
                    />
                    <TextField
                        textFieldName={"Account Name"}
                        setValue={setAccountName}
                    />
                    <TextField
                        textFieldName={"Account Number"}
                        setValue={setAccountNumber}
                    />

            <div className='flex justify-center items-center mt-20'>
                        <Button
                            buttonText={"Submit"}
                            action={"submit"}
                        />
                        <Button
                            buttonText={"Clear"}
                            action={"clear"}
                            buttonAction={clearField}
                        />

                    </div>
            
            </form>

            

            </div>

    </DefaultLayout>
    )
}

export default MerchantBankPage