import { apiInstance } from "../apiInstance";


export const createNewCurrency = async (data) => {
    try {

        let currency = await apiInstance.post("sys/currency/add", data)

        return currency.data

    } catch (error) {
        console.log(error);
        return error
    }
}