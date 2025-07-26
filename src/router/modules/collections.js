export default [
  {
    path: "/collection-one",
    name: "collection-one",
    component: () => import("@/components/collections/collection-one.vue"),
  },
  {
    path: "/collection-two",
    name: "collection-two",
    component: () => import("@/components/collections/collection-two.vue"),
  },
  {
    path: "/collection-three",
    name: "collection-three",
    component: () => import("@/components/collections/collection-three.vue"),
  },
];
