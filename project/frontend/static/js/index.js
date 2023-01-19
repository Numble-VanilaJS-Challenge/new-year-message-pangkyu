import Main from "./views/Main.js";
import NotFound from "./views/NotFound.js";
import Post from "./views/Post.js";
import Upload from "./views/Upload.js";

let postId = 0;
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router(url);
};

const router = async (url) => {
  // console.log(url);
  // console.log(location.pathname);
  const pathname = location.pathname.split("/");
  // console.log(pathname);

  if (pathname[1] === "post") {
    // console.log(pathname[2]);
    postId = Number(pathname[2]);
  }

  const routes = [
    {
      path: "/",
      view: Main,
    },
    {
      path: "/upload",
      view: Upload,
    },
    {
      path: "/post/" + postId,
      view: Post,
    },
    // {
    //   path: "/edit",
    //   view: () => console.log("edit"),
    // },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: {
        path: "/404",
        view: NotFound,
      },
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector(".app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.dataset.link);
    }
  });
  router();
});
