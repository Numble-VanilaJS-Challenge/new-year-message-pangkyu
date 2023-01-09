console.log("js load");

const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("main"),
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
      view: () => console.log("Not Found"),
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
  console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
