import { apiInstance } from "../apiInstance";




export const createNewPG = async (data) => {
    try {

        let pg = await apiInstance.post("sys/pg/add", data)

        return pg.data

    } catch (error) {
        console.log(error);
        return error
    }
}