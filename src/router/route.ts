import MainPage from "../pages/main/MainPage.vue";
import Login from "../pages/login/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

const route = [
  { path: "/", name: "main", component: MainPage },
  { path: "/login", name: "login", component: Login },
  // TODO: apply fallback page
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

// TODO: move to store
const isAuth = true;

// login 을 하지않은 상태라면 login 페이지로 이동시킨다.
router.beforeEach((to, _, next) => {
  if (!isAuth && to.name !== "login") {
    console.log("isAuth", isAuth, "to", to);
    // return { name: "login" }
    next({ name: "login" });
  }
  next();
});
