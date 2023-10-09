import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../../pageObjects/LoginPage';
import { ProfilePage } from '../../pageObjects/ProfilePage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    profilePage: ProfilePage;

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    profilePage: async ({ page, context }, use) => {
        await use(new ProfilePage(page, context));
    },
});

export default test;