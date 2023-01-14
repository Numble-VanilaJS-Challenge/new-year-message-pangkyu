import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("신년 인사말을 등록해주세요");
  }

  async getHtml() {
    return `
    <div class="waves-effect waves-light btn z-depth-3 imageUpload-btn" name = 'uploadImage' class = 'ImageUploadBtn' value = '' >
        랜덤 이미지 추가하기 
    </div>
    <div>
      <input type = 'text'  name = 'uploadTitle' placeholder = '글 제목을 작성해주세요.' class = 'titleUpload' autoFocus required />
    </div>
    <div>
      <input type = 'text' name = 'uploadContent' placeholder = '글 내용을 작성해주세요.'  class = 'contentUpload' required />
    </div>
    <div class="waves-effect waves-light btn z-depth-3 postUpload-btn" >
    글 작성하기
    </div>
    `;
  }
}
