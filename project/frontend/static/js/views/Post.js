import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("post");
  }
  async getHtml() {
    console.log("hi");

    return `<p>post</p>`;
  }
}
