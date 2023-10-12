import { HttpClient } from '../http/httpClient'
import { AxiosResponse } from 'axios'
import { AuthConfig } from '../authConfig'

export class Library {
    private httpClient: HttpClient
    private authConfig: AuthConfig

    constructor(httpClient: HttpClient, authConfig: AuthConfig = { type: 'No Auth' }) {
        this.httpClient = httpClient
        this.authConfig = authConfig
    }

    private getHeaders() {
        switch (this.authConfig.type) {
            case 'Bearer':
                return { Authorization: `Bearer ${this.authConfig.value}` }
            case 'API Key':
                return { [`${this.authConfig.keyName}`]: `${this.authConfig.value}` }
            case 'No Auth':
            default:
                return {}
        }
    }

    async get(resource: string): Promise<AxiosResponse<any>> {
        const headers = this.getHeaders()
        return this.httpClient.get(`/${resource}`, { headers })
    }

    async post(resource: string, data?: any): Promise<AxiosResponse<any>> {
        const headers = this.getHeaders()
        return this.httpClient.post(`/${resource}`, data, { headers })
    }

    async put(resource: string, data?: any): Promise<AxiosResponse<any>> {
        const headers = this.getHeaders()
        return this.httpClient.put(`/${resource}`, data, { headers })
    }

    async delete(resource: string): Promise<AxiosResponse<any>> {
        const headers = this.getHeaders()
        return this.httpClient.delete(`/${resource}`, { headers })
    }

    async getMessage(response: AxiosResponse<any>): Promise<string | null> {
        if (response && response.data && response.data.message) {
            return response.data.message
        }
        return null
    }

    async getStatus(response: AxiosResponse<any>): Promise<number | null> {
        if (response) {
            return response.status
        }
        return null
    }
}
