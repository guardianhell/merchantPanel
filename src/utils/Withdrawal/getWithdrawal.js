import { apiInstance } from "../apiInstance";


export const getWithdrawalHistory = async (dataRequest) => {
    try {

        const withdrawalHistory = await apiInstance.post("psp/withdrawal/history", dataRequest, { withCredentials: true })

        return withdrawalHistory

    } catch (error) {
        console.log(error);
        return error
    }
}