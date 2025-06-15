export class AuthorizationPage {
    constructor(page) {
        this.page = page;
        this.authorizationHeader = page.getByRole('heading', { name: 'Sign in' });
        this.authorizationEmailField = page.getByRole('textbox', { name: 'Email' });
        this.authorizationPasswordField = page.getByRole('textbox', { name: 'Password' });
        this.authorizationLoginButton = page.getByRole('button', { name: 'Login' });
        this.profileButton = page.locator('li>div[class="nav-link dropdown-toggle cursor-pointer"]');
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
    }

    async authorizationSuccess(randomUserAuth) {
        const { email, password } = randomUserAuth;
		await this.authorizationEmailField.click();
		await this.authorizationEmailField.fill(email);
		await this.authorizationPasswordField.click();
		await this.authorizationPasswordField.fill(password);
		await this.authorizationLoginButton.click();
    }
}