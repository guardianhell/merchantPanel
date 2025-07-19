import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import SalesCard from '../../components/Modules/Card/SalesCard'
import TableCard from '../../components/Modules/Card/TableCard'
import StatusCard from '../../components/Modules/Card/StatusCard'
import AccountCard from '../../components/Modules/Card/AccountCard'
import { getAllMerchantAccount } from '../../utils/Merchant/getAllMerchantAccount'
import EachUtils from '../../utils/EachUtils'

const Home = () => {

    const [merchantAccount, setMerchantAccount] = useState([])

    useEffect(() => {
        getAllMerchantAccount().then((result) => {
            console.log(result.data);

            setMerchantAccount(result.data)
        })

    }, [])


    return (
        <DefaultLayout>
            {/* <div className='w-full'>
                <div class="mx-10">
                    <div class="border-2 border-gray-200 border-dashed rounded-lg mt-10">

                        <div className='grid grid-cols-3 bg-transparent gap-6 my-12 mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                            <EachUtils
                                of={merchantAccount}
                                render={(item, index) => (
                                    <AccountCard
                                        key={index}
                                        merchantNumber={item.merchant_number}
                                        merchantAccount={item.merchant_account_number}
                                        accountNumber={item.merchant_account_number}
                                        balance={item.balance}
                                        status={item.status_name}
                                        currencyName={item.currency_name}
                                        currencySymbol={item.currency_symbol}
                                    />
                                )}
                            />
                        </div>
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            <div class="flex items-center justify-center rounded-lg ">
                                <StatusCard
                                    cardTitle={"Daily Revenue"}
                                    cardPercentages={"12%"}
                                    cardNumber={"$ 1,000,000"}
                                    cardImage={"uptrend.png"}
                                />
                            </div>
                            <div class="flex items-center justify-center rounded-lg">
                                <StatusCard
                                    cardTitle={"Daily Transaction"}
                                    cardPercentages={"3%"}
                                    cardNumber={"112"}
                                    cardImage={"transaction.jpg"}
                                />
                            </div>
                            <div class="flex items-center justify-center rounded-lg">
                                <StatusCard
                                    cardTitle={"Total Balance"}
                                    cardNumber={"$ 1,302,220"}
                                    cardImage={"money.jpg"} />
                            </div>
                        </div>


                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <StatusCard
                                cardTitle={"Pending Approval"}
                                cardNumber={"10"}
                                cardImage={"approval.jpg"}
                            />
                            <StatusCard
                                cardTitle={"Error"}
                                cardNumber={"3"}
                                cardPercentages={"-3%"}
                                cardImage={"error.jpg"}
                            />
                        </div>
                        <div class="flex items-center justify-center mb-4 rounded-sm bg-gray-50">
                            <div className='grid grid-flow-row auto-rows-max gap-4'>
                                <p className='text-black text-center'>Latest Transaction</p>
                                <TableCard />

                            </div>

                        </div>
                    </div>
                </div>
            </div> */}

            <div className="w-full px-4 md:px-10">
                <div className="border-2 border-gray-200 border-dashed rounded-lg mt-10 p-4">
                    {/* Merchant Accounts */}
                    <div className="grid gap-6 my-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <EachUtils
                            of={merchantAccount}
                            render={(item, index) => (
                                <AccountCard
                                    key={index}
                                    merchantNumber={item.merchant_number}
                                    merchantAccount={item.merchant_account_number}
                                    accountNumber={item.merchant_account_number}
                                    balance={item.balance}
                                    status={item.status_name}
                                    currencyName={item.currency_name}
                                    currencySymbol={item.currency_symbol}
                                />
                            )}
                        />
                    </div>

                    {/* Status Cards - Top Row */}
                    <div className="grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <StatusCard
                            cardTitle="Daily Revenue"
                            cardPercentages="12%"
                            cardNumber="$ 1,000,000"
                            cardImage="uptrend.png"
                        />
                        <StatusCard
                            cardTitle="Daily Transaction"
                            cardPercentages="3%"
                            cardNumber="112"
                            cardImage="transaction.jpg"
                        />
                        <StatusCard
                            cardTitle="Total Balance"
                            cardNumber="$ 1,302,220"
                            cardImage="money.jpg"
                        />
                    </div>

                    {/* Status Cards - Bottom Row */}
                    <div className="grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-2">
                        <StatusCard
                            cardTitle="Pending Approval"
                            cardNumber="10"
                            cardImage="approval.jpg"
                        />
                        <StatusCard
                            cardTitle="Error"
                            cardNumber="3"
                            cardPercentages="-3%"
                            cardImage="error.jpg"
                        />
                    </div>

                    {/* Latest Transaction Table */}
                    <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-lg p-6">
                        <div className="w-full space-y-4">
                            <p className="text-center text-lg font-semibold text-black">Latest Transaction</p>
                            <TableCard />
                        </div>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}

export default Home