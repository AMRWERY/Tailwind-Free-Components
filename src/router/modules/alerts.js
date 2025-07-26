export default [
  {
    path: "/alert-component",
    name: "alert-component",
    component: () => import("@/components/alerts/alert-component.vue"),
  },
  {
    path: "/alert-with-icon",
    name: "alert-with-icon",
    component: () => import("@/components/alerts/alert-with-icon.vue"),
  },
  {
    path: "/popup-component",
    name: "popup-component",
    component: () => import("@/components/alerts/popup-component.vue"),
  },
  {
    path: "/successful-payment",
    name: "successful-payment",
    component: () => import("@/components/alerts/successful-payment.vue"),
  },
  {
    path: "/warning-alert",
    name: "warning-alert",
    component: () => import("@/components/alerts/warning-alert.vue"),
  },
  {
    path: "/error-alert",
    name: "error-alert",
    component: () => import("@/components/alerts/error-alert.vue"),
  },
  {
    path: "/group-alerts",
    name: "group-alerts",
    component: () => import("@/components/alerts/group-alerts.vue"),
  },
];
