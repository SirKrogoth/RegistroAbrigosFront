import axios, { AxiosError } from 'axios';

export function setuAPIClient(ctx = undefined){
    const api = axios.create({
        baseURL: 'http://localhost:3000'
    });

    api.interceptors.response.use(response => {
        return response;
    })

    return api;
}