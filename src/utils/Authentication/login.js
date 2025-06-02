import { apiInstance, authApiInstance } from "../apiInstance";



export const login = async (email, password) => {
    try {

        const loginData = {
            email: email,
            password: password
        }

        const loginResponse = await authApiInstance.post('/login', loginData).then(async (result) => {

            console.log(result);


            return result

        }).catch((error) => {
            console.log(error);
            const errorData = {
                Code: "401",
                message: error.message
            }
            return errorData
        })

        return loginResponse

    } catch (error) {
        console.log(error);
        return error.message
    }
}