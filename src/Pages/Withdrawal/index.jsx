import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import DropDownList from '../../components/Modules/DropDownList'
import { getAllMerchantAccount } from '../../utils/Merchant/getAllMerchantAccount'
import numberFormatted from '../../utils/numberFormated'


const WithdrawalRequest = () => {

    const [accountList, setAccountList] = useState([])
    const [selectedAccount, setSelectedAccount] = useState("")
    const [accountIndex, setAccountIndex] = useState(null)
    const [wdAmount, setWdAmount] = useState(0)
    const [receiverBankName, setReceiverBankName] = useState("")
    const [receiverAccountNumber, setReceiverAccountNumber] = useState("")
    const [currencySymbol, setCurrencySymbol] = useState(null)
    const [receiverName, setReceiverName] = useState("")
    const [referenceNumber, setReferenceNumber] = useState("")


    useEffect(() => {
        getAllMerchantAccount().then((result) => {
            setAccountList(result.data)
            console.log(result.data);

        })
    }, [])

    useEffect(() => {

        if (selectedAccount) {
            setAccountIndex(document.getElementById("Account Number").selectedOptions[0]["index"])
            // setCurrencySymbol(accountList[accountIndex - 1]["currency_symbol"])

        }

    }, [selectedAccount])



    return (
        <DefaultLayout>

            <div className='my-10 flex items-center justify-center text-2xl'>
                <label>Withdrawal Request</label>
            </div>


            <form class="max-w-sm mx-auto">

                <DropDownList
                    dropDownText={"Account Number"}
                    dataList={accountList}
                    field={"merchant_account_number"}
                    setValue={setSelectedAccount}
                />

                <TextField
                    textFieldName={"Currency"}
                    disabled={true}
                    defaultValue={
                        accountIndex !== null ? accountList[accountIndex - 1]["currency_name"] : ""
                    }
                />

                <TextField
                    textFieldName={"Available Balance"}
                    disabled={true}
                    defaultValue={
                        accountIndex !== null ? numberFormatted(accountList[accountIndex - 1]["balance"], accountList[accountIndex - 1]["currency_symbol"]) : ""
                    }
                />

                <TextField
                    textFieldName={"Withdraw Amount"}
                />

                <TextField
                    textFieldName={"Receiver Bank Name"}
                />

                <TextField
                    textFieldName={"Receiver Account Number"}
                />

                <TextField
                    textFieldName={"Receiver Name"}
                />

                <TextField
                    textFieldName={"Withdraw Reference Number"}
                />








                <div className='flex justify-center items-center mt-20'>
                    <Button
                        action={"submit"}
                        buttonText={"Submit"}
                    />
                    <Button
                        action={"Clear"}
                        buttonText={"Clear"}

                    />


                </div>

            </form>

        </DefaultLayout>
    )
}

export default WithdrawalRequest