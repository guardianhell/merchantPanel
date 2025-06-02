import { apiInstance } from "../apiInstance";





export const getAllMerchant = async () => {

    try {
        let merchant = await apiInstance.get("sys/merchant/")
        return merchant
    } catch (error) {
        console.log(error);
        return error
    }

}