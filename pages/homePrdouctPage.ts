import { Page } from "@playwright/test";
import { strict } from "assert";
export default class HomeProductPage {

    constructor(public page: Page) {

    }
    async selectProducts(){
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.locator('//figure[@class="figure img-top"]').first().click();

    }
    async addFirstProductToTheCart() {
        await Promise.all([
            this.page.waitForLoadState("networkidle")
        ])
        await this.page.hover('(//div[@class="image"]/a)',{strict:false});
        await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();
    }

    async isToastVisible() {
        this.page.waitForLoadState("load");
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({ state:"visible" });
        return toast;
        

    }
}