import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Main");
  }

  async getHtml() {
    fetch("http://43.201.103.199/posts/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data.posts);

        for (let i = 0; i < response.data.posts.length; i++) {
          let area = document.createElement("div");
          let textArea = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("div");
          let content = document.createElement("div");

          area.innerHTML = "";
          area.className = `main__list-area` + i;
          area.className += ` main__list-area`;
          document.querySelector(".main__list").appendChild(area);

          image.innerHTML = response.data.posts[i].image;
          image.src = response.data.posts[i].image;
          image.className = `main__list-img`;
          document.querySelector(`.main__list-area` + i).appendChild(image);

          title.innerHTML = response.data.posts[i].title;
          title.className = `main__listArea-text-title`;
          document.querySelector(`.main__list-area` + i).appendChild(title);

          content.innerHTML = response.data.posts[i].content;
          content.className = `main__listArea-text-content`;
          document.querySelector(`.main__list-area` + i).appendChild(content);
        }
      })
      .catch((error) => console.log("error : ", error));

    return `
    <div class = 'main__list'>
    </div>
    `;
  }
}
