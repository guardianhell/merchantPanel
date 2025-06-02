import React, { useEffect, useState } from 'react'
import { getAllPGPaymentChannelList } from '../../utils/PaymentGatewayChannel/getAllPaymentGatewayChannelList'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'

const PaymentGatewayChannelList = () => {


    const datalistHeader = [
        { header: "Payment Gateway Channel", field: "channel_name" },
        { header: "Payment Gateway", field: "payment_gateway_name" },
        { header: "Channel ID", field: "channel_id" },
        { header: "Min Amount", field: "min_amount" },
        { header: "Max Amount", field: "max_amount" },
        { header: "Currency", field: "currency_name" },


    ]


    const [dataList, setDatalist] = useState([])

    useEffect(() => {
        getAllPGPaymentChannelList().then((result) => {
            setDatalist(result.data.data)
        })
    })


    return (
        <DefaultLayout>

            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Payment Gateway Channel List</label>
                </div>

                <TableCard
                    classname={"m-20"}
                    dataList={dataList}
                    datalistHeader={datalistHeader}
                ></TableCard>



            </div>

        </DefaultLayout>
    )
}

export default PaymentGatewayChannelList