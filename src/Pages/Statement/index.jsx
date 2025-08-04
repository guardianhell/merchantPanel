import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TableCard from '../../components/Modules/Card/TableCard'
import { header } from 'framer-motion/client'
import { getStatementTransaction } from '../../utils/Statement/getStatement'
import DropDownList from '../../components/Modules/DropDownList'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import DatePickerCustom from '../../components/Modules/DatePicker'
import DatePickerComponent from '../../components/Modules/DatePicker/index2'
import { getAllMerchantAccount } from '../../utils/Merchant/getAllMerchantAccount'
import numberFormatted from '../../utils/numberFormated'

const StatementPage = () => {

    const datalistHeader = [
        { header: "Transaction Number", field: "transaction_number" },
        { header: "Transaction Type", field: "transaction_type" },
        { header: "Cash In", field: "cash_in", numberFormatted: true },
        { header: "Cash Out", field: "cash_out", numberFormatted: true },
        { header: "Transaction Date", field: "transaction_date" },
        { header: "Balance", field: "balance", numberFormatted: true },
        { header: "Status", field: "status_name" }
    ]

    const convertTimeStringToEpoch = (timeString) => {
        let epoch = new Date(timeString + " 23:59:59").getTime()

        return epoch

    }

    const [dataList, setDataList] = useState([])
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [merchantAccountList, setMerchantAccountList] = useState([])
    const [selectedMerchantAccountId, setSelectedMerchantAccountId] = useState("")
    const [selectedMerchantAccountIndex, setSelectedMerchantAccountIndex] = useState("")
    const [searchTrxNumber, setSearchTrxNumber] = useState("")
    const [maximumDate, setMaxDate] = useState(null)
    const [minimumDate, setMinDate] = useState(null)


    // useEffect(() => {

    //     getStatementTransaction().then((result) => {
    //         console.log(result);
    //         setDataList(result.data)
    //     })

    // }, [])

    useEffect(() => {

        getAllMerchantAccount().then((result) => {
            console.log(result.data);
            setMerchantAccountList(result.data)
        })
    }, [])

    useEffect(() => {

        setEndDate(null)
        let max = new Date(startDate)
        max.setDate(max.getDate() + 30)
        max.setHours(23)
        max.setMinutes(59)
        max.setSeconds(59)
        setMaxDate(max)

    }, [startDate])


    useEffect(() => {

        setSelectedMerchantAccountIndex(document.getElementById("Account Number").selectedOptions[0]["index"])

        let max = new Date()
        max.setDate(max.getDate())
        max.setHours(0)
        max.setMinutes(0)
        max.setSeconds(1)
        setMinDate(max)

    }, [selectedMerchantAccountId])



    const search = async () => {


        const data = {
            merchant_account_id: merchantAccountList[selectedMerchantAccountIndex - 1]["id"],
            start_date: startDate,
            end_date: endDate,
            transaction_number: searchTrxNumber
        }

        getStatementTransaction(data).then((result) => {
            console.log(result);
            setDataList(result.data)
        })

        document.getElementById("Search Transaction Number").value = ""
        setSearchTrxNumber("")
    }



    return (
        <DefaultLayout>
            <div className='m-4'>
                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Statement Account</label>
                </div>
                {/* <div className='grid grid-cols-2 gap-4 text-center'>
                    <p>Account</p>
                    <p>Start Date</p>
                    <p>End Date</p>
                </div> */}
                <div className='grid grid-cols-2 w-fit'>
                    <p>Account</p>
                    <DropDownList
                        dropDownText="Account Number"
                        textHide={true}
                        dataList={merchantAccountList}
                        field={"merchant_account_number"}
                        setValue={setSelectedMerchantAccountId}
                    />
                    <p>Start Date</p>
                    <DatePickerComponent
                        id={"Start Date"}
                        setDate={setStartDate}
                        disabled={false}
                        maxDate={minimumDate}
                    />
                    <p>End Date</p>
                    <DatePickerComponent
                        id={"End Date"}
                        setDate={setEndDate}
                        maxDate={maximumDate}
                        disabled={startDate ? false : true}
                        resetTrigger={startDate}
                    />
                    <div className='mt-2'>
                        <Button
                            disable={
                                (!selectedMerchantAccountId || !startDate || !endDate) ? true : false
                            }
                            buttonText={"Search"}
                            action={"submit"}
                            buttonAction={search}
                        />

                    </div>

                    {/* <DatePickerCustom
                        pickerField={"startDate"}
                        date={startDate}
                        setDate={setStartDate}
                    />
                    <DatePickerCustom
                        pickerField={"endDate"}
                        date={endDate}
                        setDate={setEndDate}
                    /> */}
                </div>
                {/* <div className='mt-4 grid grid-cols-6 gap-4 items-center text-center'>
                    <p>Search Transaction Number</p>
                    <div className='mt-3'>
                        <TextField
                            textHide={true}
                            setValue={setSearchTrxNumber}
                            textFieldName={"Search Transaction Number"}
                        />
                    </div>

                    <Button
                        disable={
                            (!selectedMerchantAccountId || !startDate || !endDate) ? true : false
                        }
                        buttonText={"Search"}
                        action={"submit"}
                        buttonAction={search}
                    />

                </div> */}

                {/* <div className='mt-4 grid grid-cols-12 gap-4 items-center text-center'>
                    <Button
                        buttonText={"Export"}
                        action={"submit"}
                    />
                </div> */}


            </div>

            <div className='mx-12 mb-12'>
                <h3>Account Balance : {selectedMerchantAccountIndex ?
                    numberFormatted(merchantAccountList[selectedMerchantAccountIndex - 1]["balance"], merchantAccountList[selectedMerchantAccountIndex - 1]["currency_symbol"]) : ""} </h3>
                <TableCard
                    dataList={dataList}
                    datalistHeader={datalistHeader}
                    hasDetailButton={false}
                    currencySymbol={selectedMerchantAccountIndex ? merchantAccountList[selectedMerchantAccountIndex - 1]["currency_symbol"] : ""}
                ></TableCard>

            </div>






        </DefaultLayout>
    )
}

export default StatementPage