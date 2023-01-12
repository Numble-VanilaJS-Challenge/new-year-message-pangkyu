import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("post");
  }
  async getHtml() {
    return `<p>post</p>`;
  }
}
