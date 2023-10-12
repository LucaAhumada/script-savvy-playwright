import test from '../config/testManager'

// We can use steps like this to reproduce Cucumber formatting

test('@Smoke Navigate to the forum and login with valid credentials', async ({ loginPage }) => {
    await test.step(`Navigate to the forum`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Start the login process', async () => {
        await loginPage.startLoginProcess()
    })
    await test.step('Write the username and password', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Finish the login process', async () => {
        await loginPage.endLoginProcess()
    })
    await test.step('Verify that the user is logged in', async () => {
        await loginPage.verifyLoginStatus()
    })
})
