import { apiInstance } from "../apiInstance";



export const getAllActiveCurrency = async () => {

    try {

        let currencies = await apiInstance.get("sys/currency/")
        return currencies


    } catch (error) {
        console.log(error);
        return error
    }

}