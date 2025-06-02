import { apiInstance } from "../apiInstance";




export const addMerchantPaymentChannel = async (data) => {
    try {
        let merchantPayment = await apiInstance.post("sys/merchant/payment/add", data)

        return merchantPayment.data

    } catch (error) {
        console.log(error);
        return error
    }
}