import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("post");
  }

  async getPostId() {
    const postId = location.href.split("/");
    return Number(postId[4]);
  }
  async getAPI() {
    const postId = await this.getPostId();
    const response = await fetch(`http://43.201.103.199/post/${postId}`);
    const data = await response.json();
    console.log(data);
    return data.data;
  }
  async getHtml() {
    const getAPI = await this.getAPI();
    const postDay = getAPI.post.createdAt.substr(0, 10);
    console.log(getAPI.post.createdAt);

    return /* html */ `
        <div>
            <div class = 'post__header'>
                <div class = 'post__header-title'><p>${getAPI.post.title}</p></div>
                <div><p>${postDay}</p></div>
            </div>
            <div>
                <img src = ${getAPI.post.image} class = 'post-image' />
            </div>
            <div>
                <div><p>${getAPI.post.content}</p></div>
                <div>
                <div class="waves-effect waves-light btn">수정</div>
                <div class="waves-effect waves-light btn">삭제</div>
                </div>
            </div>
        <div>
        <div>
            <p>댓글 리스트</p>
        </div>
        <div>
            <div> 
                <input type = 'text' placeholder = '댓글을 입력할 수 있습니다.'/>
                <div class="waves-effect waves-light btn">입력</div>
            </div>
            <p>댓글</p>
        </div>
    `;
  }
}
