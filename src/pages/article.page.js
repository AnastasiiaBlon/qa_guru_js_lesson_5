export class ArticlePage {
  
    constructor(page) {
      this.page = page;
      this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
      this.descriptionInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
      this.bodyInput = page.getByRole('textbox', { name: 'Write your article (in' });
      this.publishButton = page.getByRole('button', { name: 'Publish Article' });
      this.articleTitle = page.getByRole('heading', { level: 1 });
      this.newArticleLink = page.getByRole('link', { name: ' New Article' });
    }
  
    async goToNewArticle() {
        await this.newArticleLink.click();
    }
  
    async createArticle(article) {
        await this.titleInput.fill(article.title);
        await this.descriptionInput.fill(article.description);
        await this.bodyInput.fill(article.body);
        await this.publishButton.click();
    }
  
    async fillTitle(title) {
      await this.titleInput.fill(title);
    }
  
    async fillDescription(description) {
      await this.descriptionInput.fill(description);
    }
  
    async fillBody(body) {
      await this.bodyInput.fill(body);
    }
  
    async publishArticle() {
      await this.publishButton.click();
    }
  
    getArticleTitle() {
      return this.articleTitle;
    }
  
    getTitleInput() {
      return this.titleInput;
    }
  }