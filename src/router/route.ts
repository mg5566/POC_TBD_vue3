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

