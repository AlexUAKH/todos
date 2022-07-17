import LoginView from "@/views/LoginView.vue";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      auth: false,
      layout: "main",
      title: ""
    },
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      auth: false,
      layout: "main",
      title: "login to account"
    },
    component: LoginView
  },
  {
    path: "/todo",
    name: "todo",
    meta: {
      auth: true,
      layout: "default",
      title: "todo list"
    },
    component: () => import("@/views/TodoView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      auth: false,
      layout: "main",
      title: "page not found"
    },
    component: () => import("@/views/404View.vue")
  }
];
