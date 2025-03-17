import { expect, test } from '@playwright/test';
import LoginPage from '../pageObjects/loginPage';
import DashboardPage from '../pageObjects/dashboardPage';
import CategoryTypePage from '../pageObjects/categoryTypePage';
import {faker} from '@faker-js/faker'

test.describe('Category page tests', () => {
    let loginPage: LoginPage; 
    let dashboardPage: DashboardPage;
    let category: CategoryTypePage;
    let apiContext;
    
    test.beforeAll(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({
          baseURL: 'https://api.club-administration.qa.qubika.com',
        });
    });

    test.afterAll(async ({ }) => {
        await apiContext.dispose();
    });
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        dashboardPage = new DashboardPage(page);
        category = new CategoryTypePage(page);
        const email = faker.internet.exampleEmail();
        const password = 'password';
        const role = ["ROLE_ADMIN"];
        const newUserObject = {
            "email": email,
            "password": password,
            "roles": role  
        }
        // Create new User through API
        const user = await apiContext.post(`/api/auth/register`, {
            data: newUserObject
        });
        const userData = await user.json();
        // Validate created user
        expect(user.status()).toBe(201);
        expect(userData.email).toBe(email);
        // Go to Login page
        await loginPage.goToLoginPage();
        await loginPage.validateLoginPageLoads();
        // Log in with new user
        await loginPage.login(email, password);
        await dashboardPage.validateLogoIsDisplayed();
    })
    
    test.afterEach(async ({ }) => {
        // TODO - ADD DELETE API CALL to delete user (currently not available)
    });
    
    test('ID-123 - New user creates Category and Sub-Category successfully', async ({ page }) => {
        const categoryName = 'AutomationCategory ' + faker.person.firstName() + faker.number.int(1000);
        const categoryName2 = 'AutomationCategory ' + faker.person.firstName() + faker.number.int(1000);
        const subCategoryName = 'AutomationSubCategory ' + faker.person.firstName() + faker.number.int(1000);
        // Go to category type page
        await dashboardPage.goToCategoryPage();
        await category.validatePageLoads();
        // Create new category
        await category.addNewCategory(categoryName);
        await category.validatedCreatedCategory(categoryName);
        // Create new sub-category
        await category.addNewCategory(categoryName, subCategoryName);
        await category.validatedCreatedCategory(categoryName, subCategoryName);
    });
})