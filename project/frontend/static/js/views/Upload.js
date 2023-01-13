import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("upload");
  }
  async getHtml() {
    // fetch("http://43.201.103.199/post", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: "글 제목",
    //     content: "글 내용",
    //     image: `https://img.freepik.com/premium-photo/small-tricolor-kitten-meows-floorroom_
    //     457211-10960.jpg?w=1060`,
    //   }),
    // }).then((response) => console.log(response));
    return `
    <div class="waves-effect waves-light btn z-depth-3 upload-btn">
        랜덤 이미지 추가하기 
    </div>
    <div>
      <input type = 'text' placeholder = '글 제목을 작성해주세요.' autoFocus required />
    </div>
    <div>
      <input type = 'text' placeholder = '글 내용을 작성해주세요.' required />
    </div>
    <div class="waves-effect waves-light btn z-depth-3 write-btn">
    글 작성하기
    </div>`;
  }
}
