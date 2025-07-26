export default [
  {
    path: "/carousel-four",
    name: "carousel-four",
    component: () => import("@/components/carousels/carousel-four.vue"),
  },
  {
    path: "/carousel-one",
    name: "carousel-one",
    component: () => import("@/components/carousels/carousel-one.vue"),
  },
  {
    path: "/carousel-two",
    name: "carousel-two",
    component: () => import("@/components/carousels/carousel-two.vue"),
  },
  {
    path: "/carousel-three",
    name: "carousel-three",
    component: () => import("@/components/carousels/carousel-three.vue"),
  },
  {
    path: "/carousel-five",
    name: "carousel-five",
    component: () => import("@/components/carousels/carousel-five.vue"),
  },
];
