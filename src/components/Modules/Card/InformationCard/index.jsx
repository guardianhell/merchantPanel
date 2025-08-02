import React, { useEffect, useState } from 'react'
import { apiInstance } from '../../../../utils/apiInstance'
import { tr } from 'framer-motion/client'
import { checkBalance } from '../../../../utils/Merchant/getAllMerchantAccount'

const InformationCard = ({ accountNumber, currencyName, depositFee, withdrawalFee, merchantPaymentId }) => {

    const [currency_Name, setCurrencyName] = useState()
    const [account_Number, setAccountNumber] = useState()
    const [balance, setBalance] = useState()
    const [merchant_Payment_Id, setMerchantPaymentId] = useState()

    useEffect(() => {

        setMerchantPaymentId(merchantPaymentId)


        checkBalance().then((result) => {
            console.log(result.data);

            setBalance(result.data)

        })


    }, [])

    return (
        <div className='grid grid-cols-4 rounded-lg w-full'>
            <div className="card-body col-span-4 bg-white rounded-lg bg-blue-300">
                <div className='grid grid-cols-6'>
                    <h2 className="card-title text-black col-span-3 text-sm">Account Number</h2>
                    <h3 className='text-black col-span-3'>{accountNumber}</h3>
                    <h2 className="card-title text-black col-span-3 text-sm">Currency</h2>
                    <h3 className='text-black col-span-3'>{currencyName}</h3>
                    <h2 className="card-title text-black col-span-3 text-sm">Deposit Fee</h2>
                    <h3 className='text-black col-span-3'>{depositFee} %</h3>
                    <h2 className="card-title text-black col-span-3 text-sm">Withdrawal Fee</h2>
                    <h3 className='text-black col-span-3'>{withdrawalFee} %</h3>
                </div>
            </div>


        </div>
    )
}

export default InformationCard