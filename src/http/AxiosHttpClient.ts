import axios, { AxiosInstance, AxiosResponse } from 'axios'

export interface HttpClient {
    get(url: string, config?: object): Promise<AxiosResponse<any>>
    post(url: string, data?: any, config?: object): Promise<AxiosResponse<any>>
    put(url: string, data?: any, config?: object): Promise<AxiosResponse<any>>
    delete(url: string, config?: object): Promise<AxiosResponse<any>>
}

export class AxiosHttpClient implements HttpClient {
    private instance: AxiosInstance

    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL })
    }

    async get(url: string, config?: object) {
        try {
            return await this.instance.get(url, config)
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // Handle the 404 status code without logging
                return error.response
            } else {
                console.error(`GET request to ${url} failed`, error)
                throw error
            }
        }
    }

    async post(url: string, data?: any, config?: object) {
        try {
            return await this.instance.post(url, data, config)
        } catch (error) {
            console.error(`POST request to ${url} failed`, error)
            throw error
        }
    }

    async put(url: string, data?: any, config?: object) {
        try {
            return await this.instance.put(url, data, config)
        } catch (error) {
            console.error(`PUT request to ${url} failed`, error)
            throw error
        }
    }

    async delete(url: string, config?: object) {
        try {
            return await this.instance.delete(url, config)
        } catch (error) {
            console.error(`DELETE request to ${url} failed`, error)
            throw error
        }
    }
}
