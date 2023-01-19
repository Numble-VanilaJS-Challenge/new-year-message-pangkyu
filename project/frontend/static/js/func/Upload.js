// window.onload = function upload() {
//   const postUploadButton = document.querySelector(".postUpload-btn");
//   const ImageUploadButton = document.querySelector(".imageUpload-btn");
//   const titleUpload = document.querySelector(".titleUpload");
//   const contentUpload = document.querySelector(".contentUpload");
//   let ImageUpload = "";

//   postUploadButton.addEventListener("click", postUploadBtnClick);
//   ImageUploadButton.addEventListener("click", ImageUploadBtnClick);

//   function ImageUploadBtnClick() {
//     fetch(`https://source.unsplash.com/random`).then(
//       (response) => (ImageUpload = response.url)
//     );
//   }

//   function postUploadBtnClick() {
//     if (
//       titleUpload.value === "" ||
//       contentUpload.value === "" ||
//       ImageUpload === ""
//     ) {
//       alert("비어 있는 항목이 있습니다. 입력 후 다시 등록해주세요");
//       return false;
//     }

//     fetch("http://43.201.103.199/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: titleUpload.value,
//         content: contentUpload.value,
//         image: ImageUpload,
//       }),
//     }).then((response) => console.log(response));

//     location.href = "/";
//   }

//   return false;
// };

window.onload = function () {
  // const postId = await this.getPostId();
  alert("hi");
  const comment = document.querySelector(".post__comment-box");
  const commentButton = document.querySelector(".post__comment-btn");

  // function addCommentEvent(comment) {
  //   console.log(comment);
  //   alert("이벤트");
  // }
};

// function
