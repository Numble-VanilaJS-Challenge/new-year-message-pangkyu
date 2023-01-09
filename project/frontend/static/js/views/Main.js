import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Main");
  }
  async getHtml() {
    return `<h1>hi</h1>
    <a href = '/post' data-link>view recent post </a>`;
  }
}
