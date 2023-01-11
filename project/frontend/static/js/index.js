import Main from "./views/Main.js";
import NotFound from "./views/NotFound.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: Main,
    },
    {
      path: "/post",
      view: () => console.log("post"),
    },
    {
      path: "/setting",
      view: () => console.log("setting"),
    },
    {
      path: "/404",
      view: NotFound,
    },
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
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector(".app").innerHTML = await view.getHtml();

  //   console.log(match);
  //   console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
