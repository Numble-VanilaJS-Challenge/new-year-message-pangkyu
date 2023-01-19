// window.onload = function addComment() {
//   alert("애드코멘트");
//   const commentBtn = document.querySelector(".post__comment-btn");
//   const commentBox = document.querySelector(".post__comment-box");

//   commentBtn.addEventListener("click", commentBtnClick(commentBox.value));

//   function commentBtnClick(comment) {
//     if (comment === "") {
//       alert("댓글을 입력해주세요");
//       return false;
//     }
//     const postId = this.getPostId();
//     const response = fetch(`http://43.201.103.199/comment/${postId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         content: comment.value,
//       }),
//     }).then((response) => console.log(response));
//     const data = response.json();
//     console.log(data);
//   }

//   return false;
// };

// window.onload = function deletePost() {
//   const deletebtn = document.querySelector(".post__button-delete");
//   deletebtn.addEventListener("click", deleteClick);

//   function deleteClick() {
//     alert("딜리트");
//     const postId = this.getPostId();
//     fetch(`http://43.201.103.199/post/${postId}`, {
//       method: "DELETE",
//     });
//   }
//   return false;
// };

window.onload = function Post() {
  alert("post");
  commentButton.addEventListener("click", function () {
    alert("btn");
    const response = fetch(`http://43.201.103.199/comment/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: comment.value,
      }),
    });
  });
};
