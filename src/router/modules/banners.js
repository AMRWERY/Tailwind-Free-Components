export default [
  {
    path: "/banner-one",
    name: "banner-one",
    component: () => import("@/components/banners/banner-one.vue"),
  },
  {
    path: "/banner-two",
    name: "banner-two",
    component: () => import("@/components/banners/banner-two.vue"),
  },
];
