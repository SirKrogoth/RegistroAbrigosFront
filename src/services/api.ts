import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';

export function setuAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            Authorization: `Bearer ${cookies['@abrigados.token']}`
        }
    });

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response?.status === 401){
            if(typeof window !== undefined){
                console.error("DEU RUIM");
                //TODO: colocar aqui o método logout()
            } else{ 
                return Promise.reject();
            }
        }

        return Promise.reject(error);
    });

    return api;
}