import axios from "axios"
import { useNavigate } from "react-router-dom"

// const navigate = useNavigate()

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


apiInstance.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
        console.log("ERRROSS");

    }
    return Promise.reject(error)
})


