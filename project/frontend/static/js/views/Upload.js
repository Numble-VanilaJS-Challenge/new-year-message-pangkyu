import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("upload");
  }
  async getHtml() {
    return `
    <form method = 'post' name = 'posting'>
    <div class="waves-effect waves-light btn z-depth-3 upload-btn" name = 'postImage'>
        랜덤 이미지 추가하기 
    </div>
    <div>
      <input type = 'text' name = 'postTitle' placeholder = '글 제목을 작성해주세요.' autoFocus required />
    </div>
    <div>
      <input type = 'text' name = 'postContent' placeholder = '글 내용을 작성해주세요.' required />
    </div>
    <div class="waves-effect waves-light btn z-depth-3 write-btn" >
    글 작성하기
    </div>
    </form>
    `;
  }
}
