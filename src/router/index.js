import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = `CITI - ${to.meta.title}`;
  }
  if (!to.meta.auth) return next();

  const authorized = JSON.parse(localStorage.getItem("authorized"));
  if (!authorized) {
    window.alert(
      "Please login to continue. \n name: Admin or Eagle \n password: 12345"
    );
    return next("/login");
  }
  return next();
});

export default router;
