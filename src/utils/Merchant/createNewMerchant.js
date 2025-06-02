import { apiInstance } from "../apiInstance";



export const createNewMerchant = async (data) => {
    try {


        const merchantData = {
            merchant_name: data.merchant_name,
            merchant_address: data.merchant_address
        }

        let merchant = await apiInstance.post("sys/merchant/add", merchantData)

        return merchant.data

    } catch (error) {
        console.log(error);
        return error
    }
}