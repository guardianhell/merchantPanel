import { apiInstance, authApiInstance } from "../apiInstance";


export const logoutApi = async () => {
    try {

        const logoutResponse = await authApiInstance.post('/logout', {}, { withCredentials: true }).then((result) => {
            return result
        })

    } catch (error) {
        console.log(error);
        return error.message
    }

}