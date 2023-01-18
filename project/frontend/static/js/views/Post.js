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
    console.log(getAPI.comments);

    return /* html */ `
        <div class = 'postSection'>
            <div class = 'post__header'>
                <div class = 'post__header-title'><p>${
                  getAPI.post.title
                }</p></div>
                <div class = 'post__header-day'><p>${postDay}</p></div>
            </div>
            <img src = ${getAPI.post.image} class = 'post-image' />
            <div class = 'post__content'><p>${getAPI.post.content}</p></div>
            <div class = 'post__button'>
                <div class="waves-effect waves-light btn post__button-edit">수정</div>
                <div class="waves-effect waves-light btn post__button-delete">삭제</div>
            </div>
       
        </div>
        <p>댓글 리스트</p>
   
        ${getAPI.comments
          .map(
            (item) =>
              ` 
                <div class = 'post__commentlist-area'>
                  <div class = 'post__commentlist-content'>${item.content} </div>
                  <div class="waves-effect waves-light btn post__commentlist-button">삭제</div>
                </div>
              `
          )
          .join("")}
        <div class = 'post__comment'> 
            <input type = 'text' placeholder = '댓글을 입력할 수 있습니다.' class = 'post__comment-box' style = 'width : 85%'/>
            <div class="waves-effect waves-light btn post__comment-btn" style = 'width : 15%'>입력</div>
        </div>
        
    `;
  }
}
