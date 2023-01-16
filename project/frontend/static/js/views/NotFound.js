import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("notFound");
  }
  async getHtml() {
    return `<p>404 NOT FOUND</p>`;
  }
}
