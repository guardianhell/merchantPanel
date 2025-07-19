import { apiInstance, authApiInstance } from "../apiInstance";



export const login = async (email, password, redirect) => {
    try {



        const loginData = {
            email: email,
            password: password,
            redirect: "http://localhost:4000/redirect/?username=" + email + "&url=/"
        }

        const loginResponse = await authApiInstance.post('/login', loginData, { withCredentials: true }).then(async (result) => {

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

export const verify = async () => {
    try {

        const response = await authApiInstance.post("/verify", {}, { withCredentials: true })

        return response

    } catch (error) {
        console.log(error);
        return error.message
    }
}