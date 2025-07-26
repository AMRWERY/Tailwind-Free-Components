export default [
  {
    path: "/store-buttons-one",
    name: "store-buttons-one",
    component: () => import("@/components/buttons/store-buttons-one.vue"),
  },
  {
    path: "/store-buttons-two",
    name: "store-buttons-two",
    component: () => import("@/components/buttons/store-buttons-two.vue"),
  },
  {
    path: "/store-buttons-three",
    name: "store-buttons-three",
    component: () => import("@/components/buttons/store-buttons-three.vue"),
  },
  {
    path: "/gradient-button",
    name: "gradient-button",
    component: () => import("@/components/buttons/gradient-button.vue"),
  },
  {
    path: "/social-buttons",
    name: "social-buttons",
    component: () => import("@/components/buttons/social-buttons.vue"),
  },
  {
    path: "/sign-in-with-buttons",
    name: "sign-in-with-buttons",
    component: () => import("@/components/buttons/sign-in-with-buttons.vue"),
  },
  {
    path: "/buttons-with-icon",
    name: "buttons-with-icon",
    component: () => import("@/components/buttons/buttons-with-icon.vue"),
  },
  {
    path: "/fancy-leaf-like-button",
    name: "fancy-leaf-like-button",
    component: () => import("@/components/buttons/fancy-leaf-like-button.vue"),
  },
];
