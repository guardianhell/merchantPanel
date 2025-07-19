import { apiInstance } from "../apiInstance";

export const getStatementTransaction = async (dataRequest) => {
    try {
        const transactionStatement = await apiInstance.post("sys/statement/", dataRequest)

        return transactionStatement

    } catch (error) {
        console.log(error);
        return error
    }
}