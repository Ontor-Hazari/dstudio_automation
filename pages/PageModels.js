class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async clickByRole(role, name) {
    await this.page.getByRole(role, { name }).click();
  }

  async fillByRole(role, name, value) {
    await this.page.getByRole(role, { name }).fill(value);
  }
}

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async goToHomePage(url) {
    await this.navigateTo(url);
  }

  async clickContactLink() {
    await this.clickByRole('link', 'CONTACT');
  }
}

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async fillNameField(name) {
    await this.page.getByRole('textbox', { name: 'Name' }).click();
    await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
  }

  async fillEmailField(email) {
    await this.page.getByRole('textbox', { name: 'E-mail' }).click();
    await this.page.getByRole('textbox', { name: 'E-mail' }).fill(email);
  }

  async fillMessageField(message) {
    await this.page.getByRole('textbox', { name: 'Message' }).click();
    await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
  }

  async clickSendButton() {
    await this.page.getByRole('button', { name: 'Send Message' }).click();
  }

  async submitContactForm(name, email, message) {
    await this.fillNameField(name);
    await this.fillEmailField(email);
    await this.fillMessageField(message);
    await this.clickSendButton();
  }
}

module.exports = { BasePage, HomePage, ContactPage };
