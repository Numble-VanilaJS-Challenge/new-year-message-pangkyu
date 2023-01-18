import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Main");
  }

  async getPosts() {
    const response = await fetch(`http://43.201.103.199/posts/`);
    const data = response.json();
    return data;
  }

  async getHtml() {
    const postList = await this.getPosts();
    console.log(postList.data);

    return /*html*/ `
    <div class="waves-effect waves-light btn z-depth-3 write-btn" onclick="location.href = '/upload'">
        글 작성하기
    </div>
    <div class = 'main__list'>
      ${postList.data.posts
        .map(
          (item) =>
            `
          
          <div class = 'main__list-area' data-link = '/post/${item.postId}' >
            <img src = ${item.image} class = 'main__list-img' data-link = '/post/${item.postId}' />
            <div class = 'main__list--text' data-link = '/post/${item.postId}'>
              <div class = 'main__list--text-title' data-link = '/post/${item.postId}'>${item.title}</div>
              <div class = 'main__list--text-content' data-link = '/post/${item.postId}'>${item.content}</div>
            </div>
          </div>
          `
        )
        .join("")}
    </div>`;
  }
}
