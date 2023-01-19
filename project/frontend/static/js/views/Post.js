import AbstractView from "./AbstractView.js";

export default class Post extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("HAPPY 2023 - 신년 인사를 읽어봐요!");
  }

  async getPostId() {
    const postId = location.href.split("/");
    return Number(postId[4]);
  }

  async getAPI() {
    const postId = await this.getPostId();
    const response = await fetch(`http://43.201.103.199/post/${postId}`);
    const data = await response.json();
    return data.data;
  }

  // async addComment() {
  //   const postId = await this.getPostId();
  //   const comment = document.querySelector(".post__comment-box");
  //   const commentButton = document.querySelector(".post__comment-btn");

  //   // function addCommentEvent(comment) {
  //   //   console.log(comment);
  //   //   alert("이벤트");
  //   // }
  //   return false;
  // }

  async getHtml() {
    const getAPI = await this.getAPI();
    const postDay = getAPI.post.createdAt.substr(0, 10);

    // const addComment = async () => {};
    // this.addComment();

    let postScript = document.createElement("script");
    postScript.setAttribute("type", "module");
    // postScript.type = "text/html";
    postScript.setAttribute("crossorigin", "use-credentials");
    postScript.src = "../func/Post.js";
    postScript.setAttribute("async", "");

    document.getElementById("root").appendChild(postScript);

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
                <div class="waves-effect waves-light btn post__button-delete" >삭제</div>
            </div>
        </div>
        <p class = 'post__content-list'>댓글 리스트</p>
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
            <div class="waves-effect waves-light btn post__comment-btn" style = 'width : 15%' >입력</div>
        </div>
        
    `;
  }
}
