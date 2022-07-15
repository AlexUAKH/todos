import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "main",
        title: "login to account"
      },
      component: HomeView
    },
    {
      path: "/todo",
      name: "todo",
      meta: {
        layout: "default",
        title: "todo list"
      },
      component: () => import("../views/AboutView.vue")
    }
  ]
});

// router.beforeEach(async (to, from, next) => {
//   if (to.meta.title) {
//     document.title = `CITI - ${to.meta.title}`;
//   }
//   const authorized = localStorage.getItem("authorized");
//   if (store.getters["user/isAuthenticated"]) {
//     const expire_at = JSON.parse(localStorage.getItem("expireAt"));
//     if (expire_at && Date.now() > expire_at) {
//       await store.dispatch("user/logout");
//       role = 0;
//     }
//   }
//   if (Number.isInteger(to.meta.auth) && to.meta.auth <= role) {
//     return next();
//   } else if (to.name != "login") {
//     await store.dispatch("user/logout");
//     return next({
//       name: "login",
//       params: {
//         nextUrl: to.fullPath
//       },
//       replace: true
//     });
//   }
//   return next();
// });

export default router;
