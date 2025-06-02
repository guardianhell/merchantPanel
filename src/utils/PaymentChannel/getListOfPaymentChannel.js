import { apiInstance } from "../apiInstance";



export const getAllListPaymentChannel = async () => {
    try {

        let paymentChannel = await apiInstance.get("sys/payment/channel/all")


        return paymentChannel
    } catch (error) {
        console.log(error);
        return error
    }
}