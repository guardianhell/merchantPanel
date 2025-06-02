import { apiInstance } from "../apiInstance";



export const updateMerchantData = async (data) => {

    try {
        const merchantData = {
            id: data.id,
            merchant_address: data.merchant_address,
            status: data.status
        }

        let merchant = await apiInstance.patch("sys/merchant/update", merchantData)

        return merchant.data

    } catch (error) {
        console.log(error);
        return error
    }


}