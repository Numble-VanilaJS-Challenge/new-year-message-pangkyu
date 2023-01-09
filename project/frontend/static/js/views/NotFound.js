import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("notFound");
  }
  async getHtml() {
    return `<p>404 NOT FOUND</p>`;
  }
}
