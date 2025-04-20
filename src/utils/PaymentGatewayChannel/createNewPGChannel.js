import { apiInstance } from "../apiInstance";



export const createNewPGChannel = async (data) => {
    try {

        let pgChannel = await apiInstance.post("sys/pg/channel/add", data)

        return pgChannel.data

    } catch (error) {
        console.log(error);
        return error
    }

}