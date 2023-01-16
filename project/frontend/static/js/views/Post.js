import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("post");
  }

  async getHtml() {
    return `<p>post</p>`;
  }
}
