import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '601b721536214a1c8267de1c2403db7c'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor (endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

    // post(data: T) {
    //     axiosInstance
    //         .post<T>(this.endpoint, data)
    //         .then(res => res.data);
    // }
}

export default APIClient