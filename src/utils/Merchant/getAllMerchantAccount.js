import { apiInstance } from "../apiInstance";


export const getAllMerchantAccount = async () => {
    try {

        let merchantAccount = await apiInstance.post("sys/merchant/account/getAllAccount", {}, { withCredentials: true })

        return merchantAccount

    } catch (error) {
        console.log(error);
        return error
    }
}

export const checkBalance = async (merchantPaymentId) => {
    try {

        const data = {
            merchant_payment_id: merchantPaymentId
        }
        const checkBalance = await apiInstance.post("sys/merchant/account/balance", data, { withCredentials: true })


        return checkBalance

    } catch (error) {
        console.log(error);
        return error
    }
}