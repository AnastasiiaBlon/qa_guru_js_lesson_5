export class MainPage {
    constructor(page) {
        this.page = page;
        this.signUpButton = page.getByRole('link', { name: 'Sign up'});
        this.loginButton = page.getByRole('link', { name: 'Login'});
    }

    async openMainPage() {
        // URL should be moved to config
        await this.page.goto('https://realworld.qa.guru/');
    }

    async goToSignUp() {
        await this.signUpButton.click();
    }

    async goToLogin() {
        await this.loginButton.click();
    }
}