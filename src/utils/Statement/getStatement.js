import { apiInstance } from "../apiInstance";

export const getStatementTransaction = async () => {
    try {
        const transactionStatement = await apiInstance.post("sys/statement/")

        return transactionStatement

    } catch (error) {
        console.log(error);
        return error
    }
}