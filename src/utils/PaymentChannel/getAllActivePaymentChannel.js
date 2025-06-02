import { apiInstance } from "../apiInstance"



export const getAllActivePaymentChannel = async () => {
    try {
        let paymentChannel = await apiInstance.get("sys/payment/channel/")
        return paymentChannel
    } catch (error) {
        console.log(error);
        return error
    }
}