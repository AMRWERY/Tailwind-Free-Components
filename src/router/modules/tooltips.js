export default [
  {
    path: "/bottom-tooltip",
    name: "BottomTooltip",
    component: () => import("@/components/tooltip/BottomTooltip.vue"),
  },
  {
    path: "/top-tooltip",
    name: "TopTooltip",
    component: () => import("@/components/tooltip/TopTooltip.vue"),
  },
  {
    path: "/left-tooltip",
    name: "LeftTooltip",
    component: () => import("@/components/tooltip/LeftTooltip.vue"),
  },
  {
    path: "/right-tooltip",
    name: "RightTooltip",
    component: () => import("@/components/tooltip/RightTooltip.vue"),
  },
  {
    path: "/without-icon-tooltip",
    name: "WithoutIconTooltip",
    component: () => import("@/components/tooltip/WithoutIconTooltip.vue"),
  },
];
