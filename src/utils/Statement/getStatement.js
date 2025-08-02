import { tr } from "framer-motion/client";
import { apiInstance } from "../apiInstance";

export const getStatementTransaction = async (dataRequest) => {
    try {
        const transactionStatement = await apiInstance.post("sys/statement/", dataRequest, { withCredentials: true })

        return transactionStatement

    } catch (error) {
        console.log(error);
        return error
    }
}

export const getDepositHistory = async (dataRequest) => {
    try {

        const depositHistory = await apiInstance.post("sys/statement/deposit/history", dataRequest, { withCredentials: true })

        return depositHistory

    } catch (error) {
        console.log(error);
        return error
    }
}

export const getDailyRev = async () => {

    try {

        const dailyrev = await apiInstance.get("sys/statement/dailyrev", { withCredentials: true })
        console.log("DAILY REV ", dailyrev.data);

        return dailyrev.data[0]

    } catch (error) {
        console.log(error);
        return error
    }

}

export const getDailyTransaction = async () => {

    try {

        const dailyrev = await apiInstance.get("sys/statement/dailyTransaction", { withCredentials: true })
        console.log("DAILY Transaction ", dailyrev.data);

        return dailyrev.data[0]

    } catch (error) {
        console.log(error);
        return error
    }

}

export const getLatest10Transaction = async (paymentChannelId) => {
    try {

        console.log("PCI", paymentChannelId);

        const data = { payment_channel_id: paymentChannelId }

        const trxList = await apiInstance.post("sys/statement/latestTransactionList/", data, { withCredentials: true })

        console.log("TTTEXX LIST", trxList);


        return trxList.data

    } catch (error) {
        console.log(error);
        return error
    }
}


