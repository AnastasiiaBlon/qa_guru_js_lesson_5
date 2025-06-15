export class YourFeedPage {
	constructor(page) {
		this.page = page;
		this.profileNameField = page.getByRole('navigation');
		this.logoutButton = page.getByRole('link', { name: 'Logout' });
	}
}