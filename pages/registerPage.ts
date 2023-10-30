import { Page } from "@playwright/test";
export default class RegisterPage {
    constructor(public page: Page) {

    }
    async enterFirstName(firstname: string) {
        await this.page.locator('#input-firstname')
            .fill(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator('#input-lastname')
            .fill(lastname);
    }
    async enterEmail(email: string) {
        await this.page.locator('#input-email')
            .fill(email);
    }
    async enterTelephone(phone: string) {
        await this.page.locator('#input-telephone')
            .fill(phone);
    }
    async enterPassword(password: string) {
        await this.page.locator('#input-password')
            .fill(password);
    }
    async enterConfirmPassword(password: string) {
        await this.page.locator('#input-confirm')
            .fill(password);
    }

    async issubscribeCheched() {
      return  await this.page.locator('[for="input-newsletter-no"]');

    }

    async clickTermsandCondition() {
        await this.page.locator('[for="input-agree"]').click();

    }
    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.locator('[value="Continue"]').click();

    }


}