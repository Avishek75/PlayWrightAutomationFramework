import { Page } from '@playwright/test';
import { LogInPage } from '../page_objects/loginPage';

export class PageManager {

    private readonly page: Page
    private readonly logInPage : LogInPage

    constructor (page:Page){
        this.page =page
        this.logInPage = new LogInPage(this.page)

    }

    AtlogInPage(){
        return this.logInPage
    }



}