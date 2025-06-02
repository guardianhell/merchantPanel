import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'
import { getAllActiveCurrency } from '../../utils/Currency/getCurrency'

const CurrencyList = () => {

    const datalistHeader = [
        { header: "Currency Name", field: "currency_name" },
        { header: "Currency Symbol", field: "currency_symbol" },
        { header: "Currency Country", field: "currency_country" }
    ]

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getAllActiveCurrency().then((result) => {
            setDataList(result.data.data)
        })
    })




    return (
        <DefaultLayout>
            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Currency List</label>
                </div>

                <TableCard
                    classname={"m-20"}
                    datalistHeader={datalistHeader}
                    dataList={dataList}
                    hasDetailButton={false}
                />




            </div>
        </DefaultLayout>
    )
}

export default CurrencyList