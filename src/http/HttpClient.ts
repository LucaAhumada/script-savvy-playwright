export interface HttpClient {
    get(url: string, config?: object): Promise<any>
    post(url: string, data: any, config?: object): Promise<any>
    put(url: string, data: any, config?: object): Promise<any>
    delete(url: string, config?: object): Promise<any>
}
