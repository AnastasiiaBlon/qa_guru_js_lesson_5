import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/builders/user.builder';
import { ArticleBuilder } from '../src/helpers/builders/article.builder';
import { MainPage } from '../src/pages/main.page';
import { RegistrationPage } from '../src/pages/registration.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import { AuthorizationPage} from '../src/pages/authorization.page';
import { ArticlePage } from '../src/pages/article.page';

test('User is able to sign in', async ({
    page,
}) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);
	const authorizationPage = new AuthorizationPage(page);
	const yourFeedPage = new YourFeedPage(page);

	const randomUser = new UserBuilder()
		.addUsername()
		.addEmail()
		.addPassword(14)
		.generate();

	await mainPage.openMainPage();
    await mainPage.goToSignUp();
	await registrationPage.signUp(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

	await authorizationPage.profileButton.click();
	await authorizationPage.logoutButton.click();

	await expect(mainPage.loginButton).toBeVisible();

	await mainPage.goToLogin();
	await authorizationPage.authorizationSuccess(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);
});

test('User is able to sign out', async ({
    page,
}) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);
	const authorizationPage = new AuthorizationPage(page);
	const yourFeedPage = new YourFeedPage(page);

	const randomUser = new UserBuilder()
		.addUsername()
		.addEmail()
		.addPassword(14)
		.generate();

	await mainPage.openMainPage();
    await mainPage.goToSignUp();
	await registrationPage.signUp(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

	await authorizationPage.profileButton.click();
	await authorizationPage.logoutButton.click();

	await expect(mainPage.loginButton).toBeVisible();
});

test.only('Logged in user is able to create an article', async ({
    page,
}) => {

	const mainPage = new MainPage(page);
	const registrationPage = new RegistrationPage(page);
	const authorizationPage = new AuthorizationPage(page);
	const yourFeedPage = new YourFeedPage(page);
	const articlePage = new ArticlePage(page);

	const randomUser = new UserBuilder()
		.addUsername()
		.addEmail()
		.addPassword(14)
		.generate();

	await mainPage.openMainPage();
    await mainPage.goToSignUp();
	await registrationPage.signUp(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

	await authorizationPage.profileButton.click();
	await authorizationPage.logoutButton.click();
	await expect(mainPage.loginButton).toBeVisible();

	await mainPage.goToLogin();
	await authorizationPage.authorizationSuccess(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(randomUser.username);

	await articlePage.goToNewArticle();
	
	const testArticle = new ArticleBuilder()
  		.addTitle()
 		.addDescription()
  		.addBody()
  		.generate();
  
  await articlePage.createArticle(testArticle);

  await expect(articlePage.getArticleTitle()).toContainText(testArticle.title);
});


