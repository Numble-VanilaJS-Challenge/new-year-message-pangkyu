import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("upload");
  }
  async getHtml() {
    return `<p>upload</p>`;
  }
}
