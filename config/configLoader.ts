import * as fs from 'fs'

export function loadEnvironmentConfig(env: string): any {
    const configPath = `./config/environment/${env}.json`
    try {
        const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'))
        return configData
    } catch (error) {
        throw new Error(`Error loading environment config for ${env}: ${error.message}`)
    }
}

export function loadTestDataConfig(data: string): any {
    const configPath = `./config/data/${data}.json`
    try {
        const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'))
        return configData
    } catch (error) {
        throw new Error(`Error loading test data config for ${data}: ${error.message}`)
    }
}
