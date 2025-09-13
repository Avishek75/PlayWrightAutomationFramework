import { Page } from "@playwright/test";

export class HelperBase {
    readonly page: Page

    constructor( page: Page) {
        this.page = page
    }


    async waitForNumberOfSecounds (timeInSecounds: number ){
        await this.page.waitForTimeout(timeInSecounds *1000)
    }
}