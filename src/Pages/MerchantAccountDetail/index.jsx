import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import EachUtils from '../../utils/EachUtils'
import StatusCard from '../../components/Modules/Card/StatusCard'
import TableCard from '../../components/Modules/Card/TableCard'
import InformationCard from '../../components/Modules/Card/InformationCard'
import { data, useLocation } from 'react-router-dom'
import { checkBalance } from '../../utils/Merchant/getAllMerchantAccount'
import numberFormatted from '../../utils/numberFormated'
import { getDailyRev, getDailyTransaction, getLatest10Transaction } from '../../utils/Statement/getStatement'
import Cookies from 'js-cookie'
import { li } from 'framer-motion/client'

const MerchantAccountDetail = () => {

    const [balance, setBalance] = useState()
    const [dailyRevenue, setDailyRevenue] = useState()
    const [dailySuccessTrx, setDailySuccessTrx] = useState()
    const [dailyTransaction, setDailyTransaction] = useState()
    const [yesterdayRevenue, setYesterdayRevenue] = useState()
    const [growthRevenue, setGrowthRevenue] = useState()

    const [transactionList, setTransactionList] = useState([])

    const dataListHeader = [
        { header: "Ref No", field: "ref_no" },
        { header: "Request Amount", field: "amount", numberFormatted: true },
        { header: "Fee %", field: "merchant_payment_fee" },
        { header: "Nett Amount", field: "nett_amount", numberFormatted: true },
        { header: "Sender", field: "sender" },
        { header: "Notes", field: "notes" },
        { header: "Transaction Date", field: "transaction_date" },
        { header: "Processed Date", field: "processed_date" },
        { header: "Status", field: "status_name" },
    ]

    const { state } = useLocation()

    useEffect(() => {

        console.log("STATE", state);




        getLatest10Transaction(state.payment_channel_id).then((result) => {
            setTransactionList(result)
        })

        checkBalance(parseInt(state.merchantPaymentId)).then((result) => {
            setBalance(result.data.message[0].balance)

        })

        getDailyRev().then((result) => {

            setDailyRevenue(result.today_trx)

            const yesterday = !result.yesterday_trx ? 0 : result.yesterday_trx

            setYesterdayRevenue(yesterday)

            const growth = ((result.today_trx - yesterday) / (yesterday)) * 100

            setGrowthRevenue(growth)

        })

        getDailyTransaction().then((result) => {
            setDailySuccessTrx(result.success_transaction)
            setDailyTransaction(result.all_transaction)
        })




    }, [])

    return (
        <DefaultLayout>
            <div className='mt-20'>

                <div className="w-full px-4 md:px-10">
                    <div className="border-2 border-gray-200 border-dashed rounded-lg mt-10 p-4">

                        {/* Status Cards - Top Row */}
                        <div className="grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                            <InformationCard
                                accountNumber={state.accountNumber}
                                currencyName={state.currencyName}
                                depositFee={state.merchantPaymentFee}
                                withdrawalFee={state.merchantWithdrawalFee}
                            />


                            <StatusCard
                                cardTitle="Total Balance"
                                cardNumber={numberFormatted(balance, state.currencySymbol)}
                                cardImage="money.jpg"
                            />

                            <StatusCard
                                cardTitle="Daily Revenue"
                                cardPercentages={growthRevenue == 'Infinity' ? "" : growthRevenue + " %"}
                                cardNumber={numberFormatted(dailyRevenue, state.currencySymbol)}
                                cardImage="uptrend.png"
                            />


                        </div>

                        {/* Status Cards - Bottom Row */}
                        <div className="grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            <StatusCard
                                cardTitle="Last Withdrawal"
                                cardNumber="NaN"
                                cardImage="approval.jpg"
                                cardPercentages="dd/mm/yy"
                            />
                            <StatusCard
                                cardTitle="Number of Success Deposit"
                                cardNumber={dailyTransaction ? dailySuccessTrx + "/" + dailyTransaction : "No Transaction"}
                                cardPercentages="Today"
                                cardImage="transaction.jpg"
                            />
                        </div>

                        {/* Latest Transaction Table */}
                        <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                            <div className="w-full space-y-4">
                                <p className="text-center text-lg font-semibold text-black">10 Latest Deposit Transaction</p>
                                <TableCard
                                    dataList={transactionList}
                                    datalistHeader={dataListHeader}
                                    hasDetailButton={false}
                                    currencySymbol={state.currencySymbol}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DefaultLayout>
    )
}

export default MerchantAccountDetail