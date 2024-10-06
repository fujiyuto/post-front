import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Content-Type': 'application/json'
    }
})
