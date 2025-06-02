import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '../../jotai/atoms'
import { createNewCurrency } from '../../utils/Currency/createNewCurrency'
import PopUpModal from '../../components/Modules/Modals'

const CurrencyForm = () => {

    const [currencyName, setCurrencyName] = useState("")
    const [currencySymbol, setCurrencySymbol] = useState("")
    const [country, setCountry] = useState("")
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)



    useEffect(() => {
        clearField()
    }, [])

    const submit = async () => {

        const data = {
            currency_name: currencyName,
            currency_symbol: currencySymbol,
            currency_country: country
        }

        const response = await createNewCurrency(data)


        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }

    }


    const clearField = async () => {
        setCurrencyName("")
        setCurrencySymbol("")
        setCountry("")
        document.getElementById("Currency Name").value = ""
        document.getElementById("Currency Symbol").value = ""
        document.getElementById("countries").value = ""
    }

    return (




        <DefaultLayout>

        
            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                <label>Currency Registration</label>
                </div>

            <form class="max-w-sm mx-auto">

                    <TextField
                        textFieldName={"Currency Name"}
                        setValue={setCurrencyName}
                    />
                    <TextField
                        textFieldName={"Currency Symbol"}
                        setValue={setCurrencySymbol}
                    />

            <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select your country</label>
                        <select

                            onChange={(e) => { setCountry(e.target.value) }}
                            id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option> 
                            <option>India</option> 
                            <option>Indonesia</option>
                            <option>Vietnam</option>
                            <option>Thailand</option> 

                </select>
            </div>

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
                message={"New Currency Registration Success!"}
            />


            </DefaultLayout>
    )
}

export default CurrencyForm