import { apiInstance } from "../apiInstance";



export const getAllActivePaymentGateway = async () => {


    try {
        let pg = await apiInstance.get("sys/pg/")
        return pg
    } catch (error) {
        console.log(error);
        return error
    }

}