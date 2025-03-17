import { Page } from "@playwright/test";
import ParentPage from "./parentPage";

class LoginPage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }
    // LOCATORS
    readonly emailInput = this.page.locator('input[type=email]');
    readonly passwordInput = this.page.locator('input[type=password]');
    readonly submitBtn = this.page.locator('button[type=submit]');
    // Go to login page
    async goToLoginPage() {
        await this.page.goto('')
        await this.page.waitForURL('**/auth/login');
    }
    // Validate login page relevant fields loaded successfully
    async validateLoginPageLoads() {
        await super.waitForElementToBeVisible(this.emailInput);
        await super.waitForElementToBeVisible(this.passwordInput);
        await super.waitForElementToBeVisible(this.submitBtn);
    }
    // Perform login action
    async login(email: string, password: string) {
        await super.fill(this.emailInput, email);
        await super.fill(this.passwordInput, password);
        await super.click(this.submitBtn);
        await this.page.waitForURL('**/dashboard');
    }
}
export default LoginPage; 