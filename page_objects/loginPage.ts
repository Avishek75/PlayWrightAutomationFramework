import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

export class LogInPage extends HelperBase {
  private signInButton;
  private emailInput;
  private passwordInput;
  private loginButton;
  private incorrectCredentialsMessage;

  constructor(page: Page) {
    super(page)
    this.signInButton = page.locator('div.v-col a[href="/auth/login"]');
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.incorrectCredentialsMessage =page.locator('div[data-testid="toast-content"]')
  }

  async login(username: string, password: string) { 
    await this.waitForNumberOfSecounds(5);
    await this.signInButton.click();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async errorValidation( errormesasge: string ){
    const fetchedErrorMessage = await this.incorrectCredentialsMessage.textContent()
    expect(fetchedErrorMessage).toEqual(errormesasge)

  
  }
}
