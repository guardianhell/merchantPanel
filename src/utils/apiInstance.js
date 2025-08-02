import axios from "axios"


export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_baseURLAPI,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
    }
})

export const authApiInstance = axios.create({
    baseURL: import.meta.env.VITE_baseURLAUTH,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
    }
})
