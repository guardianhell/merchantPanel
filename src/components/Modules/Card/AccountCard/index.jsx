import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountCard = ({ merchantNumber, accountNumber, balance, status, currencyName, currencySymbol, merchantPaymentFee, merchantWithdrawalFee, merchantPaymentId, payment_channel_id }) => {

    function numberFormatted(number) {
        const currencyFormatted = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currencySymbol,
            maximumFractionDigits: 2
        })

        return currencyFormatted.format(number)
    }

    const navigate = useNavigate()





    return (

        <div
            onClick={() => navigate("/account", { state: { accountNumber, currencyName, merchantPaymentFee, merchantWithdrawalFee, merchantPaymentId, currencySymbol, payment_channel_id } })}
            className='transition-all transition-discrete duration-400 ease-in-out cursor-pointer grid grid-cols-4 grid-rows-9 rounded-xl bg-gradient-to-r from-slate-500 via-slate-400 to-slate-300 shadow-xl shadow-slate-600 inset-shadow-sm hover:shadow-xl hover:shadow-slate-800 hover:inset-shadow-lg hover:m-1'>
            <div className='ml-2 col-span-2 row-start-1 row-end-4 mt-2'>
                <img src='TITAN PAY HRES NEW.png'></img>
            </div>
            <div className='col-start-3 col-span-2 row-start-2 text-sm text-right mr-2'>{currencyName}</div>
            <div className='ml-3 row-start-5 col-span-3  text-xs'>{merchantNumber}</div>
            <div className='ml-3 row-start-6 col-span-3  text-xs'>{accountNumber}</div>
            <div className='ml-3 row-start-7 col-span-3 text-xs'>{status}</div>
            <div className='ml-3 row-start-8 row-end-9 col-span-6 text-md'>{numberFormatted(balance)}</div>

        </div>



    )
}

export default AccountCard