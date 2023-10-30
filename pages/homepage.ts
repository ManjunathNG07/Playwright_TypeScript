import { Page } from "@playwright/test";
export default class Homepage {
    constructor(public page: Page) {

    }

    async clickOnHomeMenu() {
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.click("//span[contains(.,'Home')]");
    }
}