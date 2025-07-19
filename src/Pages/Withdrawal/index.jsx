import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import TextField from '../../components/Modules/Textfield'
import Button from '../../components/Modules/Button'
import DropDownList from '../../components/Modules/DropDownList'
import { getAllMerchantAccount } from '../../utils/Merchant/getAllMerchantAccount'
import numberFormatted from '../../utils/numberFormated'
import { sub } from 'framer-motion/client'


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
    const [callbackURL, setCallbackURL] = useState("")

    const submit = async () => {

        console.log(accountList[accountIndex - 1]["merchant_number"]);



        const data = {
            "merchant_number": accountList[accountIndex - 1]["merchant_number"],
            "merchant_account_number": accountList[accountIndex - 1]["merchant_account_number"],
            "ref_no": referenceNumber,
            "amount": wdAmount,
            "callback_url": callbackURL,
            "bank_account_number": receiverAccountNumber,
            "merchant_user": 1
        }
    }

    const clearField = () => {
        setSelectedAccount(null)
        setAccountIndex(null)
        setWdAmount(null)
        setReceiverBankName(null)
        setReceiverAccountNumber(null)
        setCurrencySymbol(null)
        setReceiverName(null)
        setReferenceNumber(null)
        document.getElementById("Account Number").value = null
        document.getElementById("Currency").value = null
        document.getElementById("Available Balance").value = null
        document.getElementById("Withdraw Amount").value = null
        document.getElementById("Receiver Bank Name").value = null
        document.getElementById("Receiver Account Number").value = null
        document.getElementById("Receiver Name").value = null
        document.getElementById("Withdraw Reference Number").value = null
    }

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
                    maskingCurrency={true}
                    setValue={setWdAmount}
                    currencySymbol={accountIndex !== null ? accountList[accountIndex - 1]["currency_symbol"] : ""}

                />

                <TextField
                    textFieldName={"Receiver Bank Name"}
                    setValue={setReceiverBankName}
                />

                <TextField
                    textFieldName={"Receiver Account Number"}
                    setValue={setReceiverAccountNumber}
                />

                <TextField
                    textFieldName={"Receiver Name"}
                    setValue={setReceiverName}
                />

                <TextField
                    textFieldName={"Withdraw Reference Number"}
                    setValue={setReferenceNumber}
                />

                <TextField
                    textFieldName={"Callback Url"}
                    setValue={setCallbackURL}
                />








                <div className='flex justify-center items-center mt-20'>
                    <Button
                        action={"submit"}
                        buttonText={"Submit"}
                        buttonAction={submit}
                    />
                    <Button
                        action={"Clear"}
                        buttonText={"Clear"}
                        buttonAction={clearField}
                    />


                </div>

            </form>

        </DefaultLayout>
    )
}

export default WithdrawalRequest