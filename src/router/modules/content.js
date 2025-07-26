export default [
  {
    path: "/content-one",
    name: "content-one",
    component: () => import("@/components/content/content-one.vue"),
  },
  {
    path: "/content-two",
    name: "content-two",
    component: () => import("@/components/content/content-two.vue"),
  },
];
