import React, { useEffect, useState } from 'react'
import DropDownList from '../../components/Modules/DropDownList'
import { getAllStatus } from '../../utils/Status/getAllStatus'
import TextField from '../../components/Modules/Textfield'
import TextArea from '../../components/TextArea'
import Button from '../../components/Modules/Button'
import { useLocation } from 'react-router-dom'
import { isOpenModalAtom } from '../../jotai/atoms'
import { useAtom } from 'jotai'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import { updateMerchantData } from '../../utils/Merchant/updateMerchantData'
import PopUpModal from '../../components/Modules/Modals'

const MerchantDetail = () => {




    const [merchantName, setMerchantName] = useState("")
    const [merchantId, setMerchantId] = useState("")
    const [merchantNumber, setMerchantNumber] = useState("")
    const [merchantAddress, setMerchantAddress] = useState("")
    const [merchantStatus, setMerchantStatus] = useState("")
    const [merchantStatusId, setMerchantStatusId] = useState("")
    const [dataList, setDatalist] = useState([])
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    const { state } = useLocation()

    const submit = async () => {

        console.log(merchantStatusId);

        const data = {
            id: merchantId,
            merchant_address: merchantAddress,
            status: merchantStatusId
        }

        const response = await updateMerchantData(data)

        if (response.status == 200) {
            clearField()
            setIsOpenModal(true)
        }
    }

    const clearField = async () => {


    }

    useEffect(() => {


        //console.log(state);

        setMerchantName(state.merchant_name)
        setMerchantId(state.id)
        setMerchantAddress(state.merchant_address)
        setMerchantStatus(state.status_name)
        setMerchantNumber(state.merchant_number)



        getAllStatus().then((result) => {
            setDatalist(result.data.data)
        })

    }, [])


    return (

        <DefaultLayout>
            <div className='mt-20'>

                <div className='my-10 flex items-center justify-center text-2xl'>
                    <label>Merchant Detail Data</label>
                </div>

                <form class="max-w-sm mx-auto">

                    <TextField
                        textFieldName={"Merchant Number"}
                        setValue={setMerchantNumber}
                        disabled={true}
                        defaultValue={merchantNumber}
                    />

                    <TextField
                        textFieldName={"Merchant Name"}
                        setValue={setMerchantName}
                        disabled={true}
                        defaultValue={merchantName}
                    />

                    <TextArea
                        textAreaLabel={"Merchant Address"}
                        setValue={setMerchantAddress}
                        disabled={true}
                        defaultValue={merchantAddress}
                    />
                    <DropDownList
                        dataList={dataList}
                        field={"status_name"}
                        setValue={setMerchantStatusId}
                        defaultValue={merchantStatus}
                    />
                    <div className='flex justify-center items-center mt-20 gap-4'>

                        <Button
                            action={"submit"}
                            buttonAction={submit}
                            buttonText={"Submit"} />
                        <Button
                            action={"clear"}
                            buttonAction={clearField}
                            buttonText={"Clear"} />
                    </div>

                </form>



            </div>


            <PopUpModal
                modalTitle={"Success"}
                message={"Merchant Data Update Success!"} />

        </DefaultLayout>



    )
}

export default MerchantDetail