import { apiInstance } from "../apiInstance"


export const getAllStatus = async () => {
    try {
        let status = await apiInstance.get("sys/status/")
        return status
    } catch (error) {
        console.log(error);
        return error
    }
}