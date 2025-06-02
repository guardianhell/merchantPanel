import { apiInstance } from "../apiInstance";


export const getAllMerchantAccount = async () => {
    try {

        const data = {
            "merchant_id": 1
        }
        let merchantAccount = await apiInstance.post("sys/merchant/account/getAllAccount", data)

        return merchantAccount

    } catch (error) {
        console.log(error);
        return error
    }
}