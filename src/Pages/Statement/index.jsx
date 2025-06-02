import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'
import { header } from 'framer-motion/client'
import { getStatementTransaction } from '../../utils/Statement/getStatement'
import DropDownList from '../../components/Modules/DropDownList'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'

const StatementPage = () => {

    const datalistHeader = [
        { header: "Transaction Number", field: "transaction_number" },
        { header: "Transaction Type", field: "transaction_type" },
        { header: "Cash In", field: "cash_in_formatted" },
        { header: "Cash Out", field: "cash_out_formatted" },
        { header: "Transaction Date", field: "transaction_date" },
        { header: "Balance", field: "balance" },
        { header: "Status", field: "status_name" }
    ]

    const [dataList, setDataList] = useState([])

    useEffect(() => {

        getStatementTransaction().then((result) => {
            console.log(result);
            setDataList(result.data)
        })

    }, [])



    return (
        <DefaultLayout>
            <div className='m-4'>
                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Statement Account</label>
                </div>
                <div className='grid grid-cols-6 gap-4 text-center'>
                    <p>Account</p>
                    <p>Start Date</p>
                    <p>End Date</p>
                </div>
                <div className='grid grid-cols-6 gap-4'>
                    <DropDownList />
                    <DropDownList />
                    <DropDownList />
                </div>
                <div className='mt-4 grid grid-cols-6 gap-4 items-center text-center'>
                    <p>Search Transaction Number</p>
                    <TextField />
                    <Button
                        buttonText={"Search"}
                        action={"submit"}
                    />
                </div>

                <div className='mt-4 grid grid-cols-12 gap-4 items-center text-center'>
                    <Button
                        buttonText={"Export"}
                        action={"submit"}
                    />
                </div>


            </div>

            <div className='mx-12 mb-12'>
                <TableCard
                    dataList={dataList}
                    datalistHeader={datalistHeader}
                    hasDetailButton={false}
                ></TableCard>

            </div>




        </DefaultLayout>
    )
}

export default StatementPage