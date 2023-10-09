import { QA, UAT, PROD } from '../../utils/testConfig';

export class Enviroment {
    private readonly env: any;

    constructor(ENV: string) {
        let environment: { [key: string]: any } = {};

        switch (ENV) {
            case 'qa':
                environment = QA;
                break;
            case 'uat':
                environment = UAT;
                break;
            case 'prod':
                environment = PROD;
                break;
        }

        // Checking if environment configuration exists and has baseURL
        if ('baseURL' in environment && environment.baseURL !== '') {
            this.env = environment;
        } else {
            console.error(`The configuration for ${ENV} does not exist or does not have a baseURL. Please check your testConfig.ts file. Exiting the process.`);
            process.exit(1);
        }
    }

    public get baseURL(): string {
        return this.env.baseURL;
    }

    public get username(): string {
        return this.env.username;
    }

    public get password(): string {
        return this.env.password;
    }

    public get data(): any {
        return this.env.data;
    }
}
