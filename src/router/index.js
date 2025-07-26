import { createRouter, createWebHistory } from "vue-router";
import modules from "./modules";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...modules,
    {
      path: "/",
      name: "home",
      component: home,
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
});

export default router;
