
class LoginPage {

    constructor(page) {

        // Store Playwright page object
        this.page = page;

        // Define Page Locators
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errormsg = page.locator('[data-test="error"]');
    }

    // Open Sauce Demo website
    async openWebsite() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Enter username
    async enterUserName(username) {
        await this.usernameInput.fill(username);
    }

    // Enter password
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    // Click login button
    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Get error message
    async getErrorMessage() {
        return await this.errormsg.textContent();
    }

    // Login method
    async Login(username, password) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

export default LoginPage;
