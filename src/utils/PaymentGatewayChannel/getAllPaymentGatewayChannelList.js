import { apiInstance } from "../apiInstance";


export const getAllPGPaymentChannelList = async () => {
    try {
        let paymentChannel = await apiInstance.get("sys/pg/channel/all")
        return paymentChannel
    } catch (error) {
        console.log(error);
        return error
    }
}