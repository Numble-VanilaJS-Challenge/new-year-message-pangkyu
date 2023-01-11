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
        console.log(response.data.posts[0]);
        response.data.posts.map((item) => {
          console.log(item);
          let area = document.createElement("div");
          area.innerHTML = response.data.posts.length;
          console.log(area.innerHTML);
        });
        const title = document.createElement("p");
        const content = document.createElement("p");
        const image = document.createElement("img");

        title.innerHTML = response.data.posts[0].title;
        content.innerHTML = response.data.posts[0].content;
        image.innerHTML = response.data.posts[0].image;
        image.src = `https://source.unsplash.com/random/360×360`;
        image.className = `main__listArea--img`;

        document.querySelector(".main__listArea--img").appendChild(image);
        document.querySelector(".main__listArea-text-title").appendChild(title);
        document
          .querySelector(".main__listArea-text-content")
          .appendChild(content);
      })
      .catch((error) => console.log("error : ", error));

    return `
    <div class = 'main__listArea'>
      <div class = 'main__listArea--img'>
      </div>
      <div class = 'main__listArea-text'>
        <div class = 'main__listArea-text-title'>
        </div>
        <div class = 'main__listArea-text-content'>
        </div>
      </div>
    </div>

   
    `;
  }
}
