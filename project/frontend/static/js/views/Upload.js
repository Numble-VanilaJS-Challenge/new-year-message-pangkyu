import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("HAPPY 2023 - 신년 인사를 작성해봐요!");
  }

  // async getImage() {
  //   const ImageUploadButton = document.querySelector(".imageUpload-btn");
  //   let ImageUpload = "";
  //   await ImageUploadButton.addEventListener("click", ImageUploadBtnClick);

  //   await fetch(`https://source.unsplash.com/random`).then(
  //     (response) => (ImageUpload = response.url)
  //   );
  //   return ImageUpload;
  // }

  async getHtml() {
    // const image = await this.getImage();
    // alert(image);
    const uploadScript = await document.createElement("script");
    uploadScript.setAttribute("type", "module");
    uploadScript.setAttribute("src", "./static/js/func/Upload.js");
    uploadScript.setAttribute("crossorigin", "use-credentials");
    uploadScript.setAttribute("defer", "");

    document.getElementById("root").appendChild(uploadScript);

    return /* html*/ `
    <div class="waves-effect waves-light btn z-depth-3 imageUpload-btn ImageUploadBtn"  >
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
