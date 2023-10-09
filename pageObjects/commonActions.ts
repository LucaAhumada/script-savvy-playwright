import { Page, Locator, BrowserContext } from '@playwright/test';

export class BasePage {
    protected page: Page;
    protected context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    protected async click(locator: Locator, fixedDelay?: number): Promise<void> {
        await locator.click();
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async fill(locator: Locator, value: string, fixedDelay?: number): Promise<void> {
        await locator.fill(value);
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async goto(url: string, fixedDelay?: number): Promise<void> {
        await this.page.goto(url);
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async type(locator: Locator, text: string, fixedDelay?: number): Promise<void> {
        await locator.type(text);
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async selectOption(locator: Locator, value: string, fixedDelay?: number): Promise<void> {
        await locator.selectOption(value);
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async check(locator: Locator, fixedDelay?: number): Promise<void> {
        await locator.check();
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    protected async uncheck(locator: Locator, fixedDelay?: number): Promise<void> {
        await locator.uncheck();
        if (fixedDelay !== undefined) {
            await this.page.waitForTimeout(fixedDelay);
        }
    }

    public async closeContext(): Promise<void> {
        await this.context.close();
    }

}
