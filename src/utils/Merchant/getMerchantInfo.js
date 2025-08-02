import { apiInstance } from "../apiInstance";

export const getMerchantInfo = async () => {
    try {

        let merchantInfo = await apiInstance.get("sys/merchant/info/detail", { withCredentials: true })

        return merchantInfo

    } catch (error) {
        console.log(error);
        return error
    }
}