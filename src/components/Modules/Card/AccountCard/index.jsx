import React from 'react'

const AccountCard = ({ merchantNumber, accountNumber, balance, status, currencyName, currencySymbol }) => {

    function numberFormatted(number) {
        const currencyFormatted = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        })

        return currencyFormatted.format(number)
    }

    return (
        <div className='grid grid-cols-6 grid-rows-10 rounded-xl bg-gradient-to-r from-slate-500 via-slate-400 to-slate-300 shadow-xl shadow-slate-600 inset-shadow-sm hover:shadow-2xl hover:shadow-slate-800 hover:inset-shadow-lg hover:m-1'>
            <div className='ml-2 col-span-2 row-start-2 row-end-4'>
                <img src='TITAN PAY HRES NEW.png'></img>
            </div>
            <div className='col-start-6 row-start-2 '>{currencyName}</div>
            <div className='ml-3 row-start-5 col-span-3  text-xs'>{merchantNumber}</div>
            <div className='ml-3 row-start-6 col-span-3  text-xs'>{accountNumber}</div>
            <div className='ml-3 row-start-7 col-span-3 text-xs'>{status}</div>
            <div className='ml-3 row-start-9 row-end-9 col-span-6 text-md'>{numberFormatted(balance)}</div>

        </div>



    )
}

export default AccountCard