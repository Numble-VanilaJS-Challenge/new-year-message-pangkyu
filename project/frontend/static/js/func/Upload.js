// window.onload = function Upload() {
async function upload() {
  alert("hi");
  const uploadButton = document.querySelector(".write-btn");
  uploadButton.addEventListener("click", click);

  function click(e) {
    e.preventDefault();
    window.alert("click");

    const postTitle = document.forms["posting"]["postTitle"].value;
    const postContent = document.forms["posting"]["postContent"].value;
    const postImage = document.forms["posting"]["postImage"].value;

    if (postTitle === "" || postContent === "" || postImage === "") {
      alert("비어있는 항목이 있습니다. 입력후 다시 등록해주세요");
      return false;
    }
    fetch("http://43.201.103.199/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        content: postContent,
        image: `https://img.freepik.com/premium-photo/small-tricolor-kitten-meowsfloor-
        room_457211-10960.jpg?w=1060`,
        // image: postImage,
      }),
    }).then((response) => console.log(response));
  }
}

// async function randomImage() {}
