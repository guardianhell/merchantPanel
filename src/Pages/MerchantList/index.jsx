import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'
import { getAllMerchant } from '../../utils/Merchant/getAllMerchant'
import { Navigate, useNavigate } from 'react-router-dom'

const MerchantList = () => {

    const navigate = useNavigate()


    const datalistHeader = [
        // { header: "No.", field: "index" },
        { header: "Merchant Code", field: "merchant_number" },
        { header: "Merchant Name", field: "merchant_name" },
        { header: "Status", field: "status_name" }
    ]

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getAllMerchant().then((result) => {
            setDataList(result.data.data)
        })



    }, [])


    return (
        <DefaultLayout>

            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Merchant List</label>
                </div>


                <TableCard
                    classname={"m-20"}
                    dataList={dataList}
                    datalistHeader={datalistHeader}
                    hasDetailButton={true}
                    detailButtonNavigation={'/merchant/detail'}
                ></TableCard>



            </div>


        </DefaultLayout >
    )
}

export default MerchantList