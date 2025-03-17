import { expect, Page } from "@playwright/test";
import ParentPage from "./parentPage";

class CategoryTypePage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }
    //LOCATORS
    readonly categoryTypeBtn = this.page.locator('[href*="#/category-type"]');
    readonly categoryTypeHeader = this.page.locator('.card-header h3');
    readonly addCategoryBtn = this.page.locator('.card-header button');
    readonly categoryNameInput = this.page.locator('#input-username');
    readonly categorySubmitBtn = this.page.locator('button[type=submit]');
    readonly categoryLastPaginationBtn = this.page.locator('.pagination .page-item a').nth(-2);
    readonly subCategoryCheckbox = this.page.locator('.custom-checkbox label');
    readonly categorySearchInput = this.page.locator('div[role="combobox"] input');
    readonly categorySearchOption = this.page.locator('.ng-dropdown-panel span');
    readonly categoryTypeTable = this.page.locator('.table');
    readonly categoryTypeTableFirstRow = this.page.locator('.table td');

     // Validate Logo loaded successfully
    async validatePageLoads() {
        await this.page.waitForURL('**/category-type');
        await super.waitForElementToBeVisible(this.categoryTypeHeader);
    }
    // Go to the Category page
    async goToCategoryPage() {
        await super.click(this.categoryTypeBtn);
    }
    // Add new category
    async addNewCategory(categoryName: string, subCategory?: string) {
        await super.click(this.addCategoryBtn);
        await super.waitForElementToBeVisible(this.categoryNameInput);
        if (subCategory) {
            await super.fill(this.categoryNameInput, subCategory);
            await this.subCategoryCheckbox.check();
            await super.fill(this.categorySearchInput, categoryName);
            await super.waitForElementToBeVisible(this.categorySearchOption);
            await super.click(this.categorySearchOption);
            if (await this.categorySearchOption.isVisible()){
                await super.click(this.categorySearchOption);
            }
            await super.waitForElementToBeVisible(this.categorySubmitBtn);
            if (await this.categorySubmitBtn.isEnabled()) await super.click(this.categorySubmitBtn);
        } else {
            await super.fill(this.categoryNameInput, categoryName);
            await super.click(this.categorySubmitBtn);
        }
    }
    // Validate the created category was displayed correctly
    async validatedCreatedCategory(categoryName: string, subCategory?: string) {
        await this.page.reload({waitUntil:'networkidle'});
        await this.page.waitForURL('**/category-type');
        await super.waitForElementToBeVisible(this.categoryLastPaginationBtn);
        await super.click(this.categoryLastPaginationBtn);
        if (subCategory) {
            await expect(this.categoryTypeTable).toContainText(subCategory);
        } else {
            await expect(this.categoryTypeTable).toContainText(categoryName);
        }
    }
}
export default CategoryTypePage; 