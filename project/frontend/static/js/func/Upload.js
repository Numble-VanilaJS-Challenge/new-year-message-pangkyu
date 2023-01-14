window.onload = async function upload() {
  const postUploadButton = document.querySelector(".postUpload-btn");
  const ImageUploadButton = document.querySelector(".imageUpload-btn");
  // let uploadTitle = document.forms["uploading"]["uploadTitle"].value;
  // let uploadContent = document.forms["uploading"]["uploadContent"].value;
  // let uploadImage = document.forms["uploading"]["uploadImage"].value;
  const titleUpload = document.querySelector(".titleUpload");

  postUploadButton.addEventListener("click", postUploadBtnClick);
  ImageUploadButton.addEventListener("click", ImageUploadBtnClick);

  function ImageUploadBtnClick(e) {
    window.alert("이미지");
  }

  function postUploadBtnClick(e) {
    window.alert("글 등록");
    console.log(titleUpload.value);
    // console.log(uploadContent);

    // if (postTitle === "" || postContent === "" || postImage === "") {
    //   alert("비어있는 항목이 있습니다. 입력후 다시 등록해주세요");
    //   return false;
    // }
    // fetch("http://43.201.103.199/post", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: postTitle,
    //     content: postContent,
    //     image: `https://img.freepik.com/premium-photo/small-tricolor-kitten-meowsfloor-
    //     room_457211-10960.jpg?w=1060`,
    //     // image: postImage,
    //   }),
    // }).then((response) => console.log(response));
  }
};

// async function randomImage() {}
