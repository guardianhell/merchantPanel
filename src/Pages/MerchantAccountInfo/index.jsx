import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import { useAtom } from 'jotai'
import { merchantInformation } from '../../jotai/atoms'

const MechantInformation = () => {


    const [merchantInformations,] = useAtom(merchantInformation)

    useEffect(() => {


    }, [merchantInformations])

    return (
        <DefaultLayout>

            <div className='flex items-center justify-center mt-10'>

                <div class="border-2 border-black rounded-xl p-8 w-full max-w-3xl bg-white items-text-center justify-center ">

                    <div className='grid-rows-3'>
                        <div className='grid grid-cols-[1fr_auto_2fr] gap-2'>
                            <div class="w-1/2 font-semibold">Merchant Name</div>
                            <div class="">:</div>
                            <div class="">{merchantInformations.merchant_name}</div>

                            <div class="w-1/2 font-semibold">Merchant Secret Key</div>
                            <div class="">:</div>
                            <div class="">{merchantInformations.merchant_secret_key}</div>

                            <div class="w-1/2 font-semibold">Merchant API Key</div>
                            <div class="">:</div>
                            <div class="">{merchantInformations.merchant_api_key}</div>
                        </div>

                    </div>

                </div>

            </div>



        </DefaultLayout>
    )
}

export default MechantInformation