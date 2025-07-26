export default [
  {
    path: "/faq-one",
    name: "FaqOne",
    component: () => import("@/components/f-a-q/FaqOne.vue"),
  },
  {
    path: "/faq-two",
    name: "FaqTwo",
    component: () => import("@/components/f-a-q/FaqTwo.vue"),
  },
  {
    path: "/faq-three",
    name: "FaqThree",
    component: () => import("@/components/f-a-q/FaqThree.vue"),
  },
  {
    path: "/faq-four",
    name: "FaqFour",
    component: () => import("@/components/f-a-q/FaqFour.vue"),
  },
  {
    path: "/faq-five",
    name: "FaqFive",
    component: () => import("@/components/f-a-q/FaqFive.vue"),
  },
];
