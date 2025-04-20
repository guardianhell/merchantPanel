import { apiInstance } from "../apiInstance";



export const getAllActivePaymentGateway = async () => {

    try {

        let pgChannel = await apiInstance.get("sys/pg/channel")
        return pgChannel

    } catch (error) {
        console.log(error);
        return error
    }


}