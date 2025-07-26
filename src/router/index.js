import { createRouter, createWebHistory } from "vue-router";
import modules from "./modules";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...modules,
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
});

export default router;
