import { apiInstance } from "../apiInstance";





export const createNewPaymentChannel = async (data) => {
    try {

        let psp = await apiInstance.post("sys/payment/channel/add", data)

        return psp.data

    } catch (error) {
        console.log(error);
        return error
    }
}