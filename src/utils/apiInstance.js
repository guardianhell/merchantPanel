import axios from "axios"


export const apiInstance = axios.create({
    baseURL: "http://localhost:8081/api-v1/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
    }
})

export const authApiInstance = axios.create({
    baseURL: "http://localhost:4000/api-v1/auth/",
    headers: {
        "Content-Type": "application/json"
    }
})
