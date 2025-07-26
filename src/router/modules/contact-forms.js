export default [
  {
    path: "/contact-one",
    name: "contact-one",
    component: () => import("@/components/contact/contact-one.vue"),
  },
  {
    path: "/contact-two",
    name: "contact-two",
    component: () => import("@/components/contact/contact-two.vue"),
  },
  {
    path: "/contact-three",
    name: "contact-three",
    component: () => import("@/components/contact/contact-three.vue"),
  },
  {
    path: "/contact-four",
    name: "contact-four",
    component: () => import("@/components/contact/contact-four.vue"),
  },
  {
    path: "/contact-five",
    name: "contact-five",
    component: () => import("@/components/contact/contact-five.vue"),
  },
];
