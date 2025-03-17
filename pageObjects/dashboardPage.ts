import { Page } from "@playwright/test";
import ParentPage from "./parentPage";

class DashboardPage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }
    //LOCATORS
    readonly dashboardLogo = this.page.locator('.navbar-brand');
    readonly categoryTypeBtn = this.page.locator('[href*="#/category-type"]')
    // Validate Logo loaded successfully
    async validateLogoIsDisplayed() {
        await super.waitForElementToBeVisible(this.dashboardLogo);
    }
    // Go to the Category page
    async goToCategoryPage() {
        await super.click(this.categoryTypeBtn);
        await this.page.waitForURL('**/category-type');
    }
}
export default DashboardPage; 