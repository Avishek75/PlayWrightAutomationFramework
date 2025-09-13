import { test, expect } from '@playwright/test';
import { PageManager } from '../page_objects/pageManager';



test.describe('Login', () => {

    //test.describe.configure({retries: 2})

    test.beforeEach(async({page}) => {
    await page.goto('/')
})

    test('Log in with valid credentials @smoke', async({page}) => {
        const pm = new PageManager(page) 
        await pm.AtlogInPage().login('btbooksqa+100@gmail.com', 'Test@123')
        await expect(page).toHaveURL('https://www.superbookdepot.com/')

    })


    test('Log in with invalid credentials', async({page}) => {
        const pm = new PageManager(page) 
        await pm.AtlogInPage().login('btbooksqa+100@gmail.com', 'Test@1234')
        await pm.AtlogInPage().errorValidation('Unable to authenticate with provided credentials')

    })



})
