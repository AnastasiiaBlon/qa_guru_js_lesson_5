import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/builders/user.builder';
import { MainPage } from '../src/pages/main.page';
import { RegistrationPage } from '../src/pages/registration.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';

test('User is able to create account', async ({
    page,
}) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);
	const yourFeedPage = new YourFeedPage(page);

	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate();

	await mainPage.openMainPage();
    await mainPage.goToSignUp();
	await registrationPage.signUp(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(
		randomUser.username,
	);
});

test('After signup attempt "Your Name" field is focused when it is not filled in', async ({ 
    page,
 }) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);

    const randomUserNoUserName = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.generate();
    
    await mainPage.openMainPage();
    await mainPage.goToSignUp();
    await registrationPage.signUpWithoutUsername(randomUserNoUserName);
    await expect(registrationPage.userNameField).toBeFocused();
});

test('After signup attempt "Email" field is focused when it is not filled in', async ({ 
    page,
 }) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);

    const randomUserNoEmail = new UserBuilder()
        .addUsername()
		.addPassword(14)
		.generate();
    
    await mainPage.openMainPage();
    await mainPage.goToSignUp();
    await registrationPage.signUpWithoutEmail(randomUserNoEmail);
    await expect(registrationPage.emailField).toBeFocused();
});

test('After signup attempt "Password" field is focused when it is not filled iny', async ({ 
    page,
 }) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);

    const randomUserNoPassword = new UserBuilder()
        .addEmail()
        .addUsername()
		.generate();
    
    await mainPage.openMainPage();
    await mainPage.goToSignUp();
    await registrationPage.signUpWithoutPassword(randomUserNoPassword);
    await expect(registrationPage.passwordField).toBeFocused();
});