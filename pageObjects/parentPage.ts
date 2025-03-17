import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

class ParentPage {
    readonly page: Page; 
    constructor(page) {
        this.page = page
    }

    async waitForElementToBeVisible(element) {
        await expect(element).toBeVisible()
    }

    async click(element) {
        await this.waitForElementToBeVisible(element)
        await element.click()
    }

    async fill(element, text: string) {
        await this.waitForElementToBeVisible(element)
        await element.fill(text)
    }
}

export default ParentPage; 