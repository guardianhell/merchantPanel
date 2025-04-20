import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import SalesCard from '../../components/Modules/Card/SalesCard'
import TableCard from '../../components/Modules/Card/TableCard'
import StatusCard from '../../components/Modules/Card/StatusCard'

const Home = () => {


    return (
        <DefaultLayout>
            <div className='w-full'>
                <div class="mx-10">
                    <div class="border-2 border-gray-200 border-dashed rounded-lg mt-10">
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

                        {/* <div class="grid grid-cols-2 justify-center gap-2 mb-4">
                            <SalesCard />
                        </div> */}
                        <div class="flex items-center justify-center mb-4 rounded-sm bg-gray-50">
                            <div className='grid grid-flow-row auto-rows-max gap-4'>
                                <p className='text-black text-center'>Latest Transaction</p>
                                <TableCard />

                            </div>

                        </div>


                        {/*
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home