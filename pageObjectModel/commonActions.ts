import { Page, Locator, BrowserContext } from '@playwright/test'
import logger from '../src/core/logger'

export class BasePage {
    protected page: Page
    protected context: BrowserContext
    protected defaultTimeout = 5000

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
    }

    protected async click(locator: Locator, timeout = this.defaultTimeout, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.waitFor({ state: 'visible', timeout: timeout })
            await locator.click()
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while clicking on element: ${locator}: ${error}`)
        }
    }

    protected async fill(locator: Locator, value: string, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.fill(value)
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while filling element with value ${value}: ${error}`)
        }
    }

    protected async goto(url: string, delayMilliseconds?: number): Promise<void> {
        try {
            await this.page.goto(url)
            await this.page.waitForFunction(() => document.readyState === 'complete')
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while navigating to URL: ${url}: ${error}`)
        }
    }

    protected async pressSequentially(locator: Locator, text: string, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.pressSequentially(text)
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while pressing keys ${text} on the element: ${error}`)
        }
    }

    protected async selectOption(locator: Locator, value: string, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.selectOption(value)
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while selecting option ${value} from the element: ${error}`)
        }
    }

    protected async check(locator: Locator, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.check()
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while checking element: ${locator}: ${error}`)
        }
    }

    protected async uncheck(locator: Locator, delayMilliseconds?: number): Promise<void> {
        try {
            await locator.uncheck()
            if (delayMilliseconds !== undefined) {
                await this.page.waitForTimeout(delayMilliseconds)
            }
        } catch (error) {
            logger.error(`Error occurred while unchecking element: ${locator} : ${error}`)
        }
    }

    public async closeContext(): Promise<void> {
        await this.context.close()
    }
}
