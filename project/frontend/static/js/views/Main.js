import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Main");
  }

  async getHtml() {
    fetch(`http://43.201.103.199/posts/`)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.data.posts.length; i++) {
          let area = document.createElement("div");
          let textArea = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("div");
          let content = document.createElement("div");
          area.innerHTML = "";
          area.className = `main__list-area` + i;
          area.className += ` collection`;
          area.style = `border-radius : 1rem`;

          area.setAttribute(
            "data-link",
            `/post/${Number(response.data.posts[i].postId)}`
          );
          document.querySelector(".main__list").appendChild(area);

          image.innerHTML = response.data.posts[i].image;
          image.src = response.data.posts[i].image;
          image.className = `main__list-img`;
          document.querySelector(`.main__list-area` + i).appendChild(image);

          textArea.innerHTML = "";
          textArea.className = `main__list--text`;
          textArea.className += ` main__list--text` + i;
          document.querySelector(`.main__list-area` + i).appendChild(textArea);

          title.innerHTML = response.data.posts[i].title;
          title.className = `main__list--text-title`;
          document.querySelector(`.main__list--text` + i).appendChild(title);

          content.innerHTML = response.data.posts[i].content;
          content.className = `main__list--text-content`;
          document.querySelector(`.main__list--text` + i).appendChild(content);
        }
      })
      .catch((error) => console.log("error : ", error));

    return `
    <div
        class="waves-effect waves-light btn z-depth-3 write-btn"
        onclick="location.href = '/upload'"
    >
        글 작성하기
    </div>
    <div class = 'main__list'>
    </div>

    `;
  }
}
