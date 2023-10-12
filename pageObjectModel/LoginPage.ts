import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../config/configLoader'

export class LoginPage extends BasePage {
    readonly LOGIN_START_BUTTON: Locator
    readonly USERNAME_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly LOGIN_FINISH_BUTTON: Locator
    readonly UNREAD_MESSAGES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LOGIN_START_BUTTON = this.page.getByRole('link', { name: ' Iniciar sesión' })
        this.USERNAME_INPUT = this.page.locator('#ajax_loginuser')
        this.PASSWORD_INPUT = this.page.locator('#ajax_loginpass')
        this.LOGIN_FINISH_BUTTON = this.page.getByRole('button', { name: 'Iniciar sesión' })
        this.UNREAD_MESSAGES = this.page.getByRole('link', { name: 'Mensajes no leídos' })
    }

    async navigateToLoginPage(): Promise<void> {
        await this.goto(this.env.baseURL)
    }

    async startLoginProcess(): Promise<void> {
        await this.click(this.LOGIN_START_BUTTON)
    }

    async fillCredentials(): Promise<void> {
        await this.fill(this.USERNAME_INPUT, this.env.username)
        await this.fill(this.PASSWORD_INPUT, this.env.password)
    }

    async endLoginProcess(): Promise<void> {
        await this.click(this.LOGIN_FINISH_BUTTON)
    }

    async verifyLoginStatus(): Promise<void> {
        await expect(this.UNREAD_MESSAGES).toBeVisible()
    }

    async navigateToUrlAndLogin(): Promise<void> {
        await this.navigateToLoginPage()
        await this.startLoginProcess()
        await this.fillCredentials()
        await this.endLoginProcess()
        await this.verifyLoginStatus()
    }
}
