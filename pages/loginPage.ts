import { Page } from "@playwright/test";
export default class LoginPage {
    constructor(public page: Page) {

    }
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickOnLogin();
    }
    async enterEmail(emailaddress: string) {
        await this.page.locator('#input-email')
            .fill(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator('#input-password')
            .fill(password);
    }
    async clickOnLogin() {
        await this.page.locator('[value="Login"]').click();

    }
}
