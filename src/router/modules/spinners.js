export default [
  {
    path: "/basic-spinner",
    name: "BasicSpinner",
    component: () => import("@/components/spinner/BasicSpinner.vue"),
  },
  {
    path: "/color-spinner",
    name: "ColorSpinner",
    component: () => import("@/components/spinner/ColorSpinner.vue"),
  },
  {
    path: "/size-spinner",
    name: "SizeSpinner",
    component: () => import("@/components/spinner/SizeSpinner.vue"),
  },
  {
    path: "/with-text-spinner",
    name: "WithTextSpinner",
    component: () => import("@/components/spinner/WithTextSpinner.vue"),
  },
  {
    path: "/on-button-spinner",
    name: "OnButtonSpinner",
    component: () => import("@/components/spinner/OnButtonSpinner.vue"),
  },
];
