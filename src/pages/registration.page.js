export class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.signUpHeaderText = page.getByRole('link', { name: 'Sign in to your account' })
        this.userNameField = page.getByRole('textbox', { name: 'Your Name' });
        this.emailField = page.getByRole('textbox', { name: 'Email' });
		this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign up' });
        this.errorMessage = page.locator('.error-messages li');
    }

    async signUp(randomUser) {
        const { email, password, username } = randomUser;
		await this.userNameField.click();
		await this.userNameField.fill(username);
		await this.emailField.click();
		await this.emailField.fill(email);
		await this.passwordField.click();
		await this.passwordField.fill(password);
		await this.loginButton.click();
    }

    async signUpWithoutUsername(randomUserNoUserName) {
        const { email, password } = randomUserNoUserName;
        await this.emailField.click();
		await this.emailField.fill(email);
        await this.passwordField.click();
		await this.passwordField.fill(password);
		await this.loginButton.click();
	}

    async signUpWithoutEmail(randomUserNoEmail) {
        const { username, password } = randomUserNoEmail;
        await this.userNameField.click();
		await this.userNameField.fill(username);
        await this.passwordField.click();
		await this.passwordField.fill(password);
		await this.loginButton.click();
	}

    async signUpWithoutPassword(randomUserNoPassword) {
        const { username, email } = randomUserNoPassword;
        await this.userNameField.click();
		await this.userNameField.fill(username);
        await this.emailField.click();
		await this.emailField.fill(email);
		await this.loginButton.click();
	}
}