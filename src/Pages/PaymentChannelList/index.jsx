import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'
import { getAllListPaymentChannel } from '../../utils/PaymentChannel/getListOfPaymentChannel'

const PaymentChannelList = () => {


    const datalistHeader = [
        { header: "Payment Name", field: "payment_name" },
        { header: "Payment Gateway", field: "payment_gateway_name" },
        { header: "Payment Gateway Channel", field: "channel_name" },
        { header: "Currency", field: "currency_name" },
        { header: "Payment Fee to PG", field: "payment_fee_to_pg" },
        { header: "Min Amount", field: "min_amount" },
        { header: "Max Amount", field: "max_amount" },
        { header: "Status", field: "status_name" },

    ]

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getAllListPaymentChannel().then((result) => {
            setDataList(result.data.data)
        })
    })


    return (
        <DefaultLayout>

            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Payment Channel List</label>
                </div>

                <TableCard
                    classname={"m-20"}
                    dataList={dataList}
                    datalistHeader={datalistHeader}
                    hasDetailButton={false}
                    detailButtonNavigation={'/merchant/detail'}
                ></TableCard>



            </div>

        </DefaultLayout>
    )
}

export default PaymentChannelList