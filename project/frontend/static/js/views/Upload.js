import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("신년 인사말을 등록해주세요");
  }

  async getHtml() {
    const uploadScript = document.createElement("script");
    uploadScript.setAttribute("type", "module");
    uploadScript.setAttribute("src", "./static/js/func/Upload.js");
    uploadScript.setAttribute("crossorigin", "use-credentials");
    uploadScript.setAttribute("async", "");

    document.getElementById("root").appendChild(uploadScript);

    return /* html*/ `
    <div class="waves-effect waves-light btn z-depth-3 imageUpload-btn" name = 'uploadImage' class = 'ImageUploadBtn'  >
        랜덤 이미지 추가하기 
    </div>
    <div>
      <input type = 'text' placeholder = '글 제목을 작성해주세요.' class = 'titleUpload' autoFocus required />
    </div>
    <div>
      <input type = 'text' placeholder = '글 내용을 작성해주세요.'  class = 'contentUpload' required />
    </div>
    <div class="waves-effect waves-light btn z-depth-3 postUpload-btn" >
    글 작성하기
    </div>
    `;
  }
}
