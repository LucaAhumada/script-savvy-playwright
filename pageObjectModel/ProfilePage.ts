import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig } from '../config/configLoader'

export class ProfilePage extends BasePage {
    readonly PROFILE_DROPDOWN_MENU: Locator
    readonly PROFILE_DETAILS_BUTTON: Locator
    readonly PERSONAL_TEXT: Locator
    readonly BIRTHDATE_YEAR: Locator
    readonly BIRTHDATE_MONTH: Locator
    readonly BIRTHDATE_DAY: Locator
    readonly SIGNATURE: Locator
    readonly LOCATION: Locator
    readonly AVATAR_URL_MENU: Locator
    readonly AVATAR_URL_INPUT: Locator
    readonly SAVE_BUTTON: Locator
    readonly SUCCESS_MESSAGE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)

        this.env = loadEnvironmentConfig(environment)

        this.PROFILE_DROPDOWN_MENU = this.page.getByRole('link', { name: '▼' })
        this.PROFILE_DETAILS_BUTTON = this.page.getByRole('link', { name: 'Detalles del Perfil' })
        this.PERSONAL_TEXT = this.page.getByLabel('Texto Personal')
        this.BIRTHDATE_YEAR = this.page.locator('input[name="bday3"]')
        this.BIRTHDATE_MONTH = this.page.locator('input[name="bday1"]')
        this.BIRTHDATE_DAY = this.page.locator('input[name="bday2"]')
        this.SIGNATURE = this.page.locator('#signature')
        this.LOCATION = this.page.locator('[id="customfield\\[cust_loca\\]"]')
        this.AVATAR_URL_MENU = this.page.getByText('Especificar avatar mediante URL')
        this.AVATAR_URL_INPUT = this.page.locator('input[name="userpicpersonal"]')
        this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Cambiar perfil' })
        this.SUCCESS_MESSAGE = this.page.getByText('Se ha actualizado correctamente tu perfil')
    }

    async navigateToURL(): Promise<void> {
        await this.goto(this.env.baseURL)
    }

    async clickProfileDropdownMenu(): Promise<void> {
        await this.click(this.PROFILE_DROPDOWN_MENU)
    }

    async clickProfileDetailsButton(): Promise<void> {
        await this.click(this.PROFILE_DETAILS_BUTTON)
    }

    async fillBirthdate(year: string, month: string, day: string): Promise<void> {
        await this.fill(this.BIRTHDATE_YEAR, year)
        await this.fill(this.BIRTHDATE_MONTH, month)
        await this.fill(this.BIRTHDATE_DAY, day)
    }

    async fillPersonalText(text: string): Promise<void> {
        await this.fill(this.PERSONAL_TEXT, text)
    }

    async fillSignature(text: string): Promise<void> {
        await this.fill(this.SIGNATURE, text)
    }

    async fillLocation(text: string): Promise<void> {
        await this.fill(this.LOCATION, text)
    }

    async clickAvatarUrlMenu(): Promise<void> {
        await this.click(this.AVATAR_URL_MENU)
    }

    async fillAvatarUrl(text: string): Promise<void> {
        await this.fill(this.AVATAR_URL_INPUT, text)
    }

    async clickSaveProfileChanges(): Promise<void> {
        await this.click(this.SAVE_BUTTON)
    }

    async verifySuccessMessage(): Promise<void> {
        await expect(this.SUCCESS_MESSAGE, 'Should have profile updated successfully').toBeVisible()
    }

    async cleanProfile(): Promise<void> {
        await this.fillBirthdate('', '', '')
        await this.fillPersonalText('')
        await this.fillSignature('')
        await this.fillLocation('')
        await this.clickAvatarUrlMenu()
        await this.fillAvatarUrl('')
        await this.clickSaveProfileChanges()
    }
}
