export default [
  {
    path: "/range-one",
    name: "range-one",
    component: () => import("@/components/range/range-one.vue"),
  },
  {
    path: "/range-two",
    name: "range-two",
    component: () => import("@/components/range/range-two.vue"),
  },
];
