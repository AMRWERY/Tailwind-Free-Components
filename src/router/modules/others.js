export default [
  {
    path: "/users-comments",
    name: "users-comments",
    component: () => import("@/components/users-comments.vue"),
  },
  {
    path: "/text-editor",
    name: "text-editor",
    component: () => import("@/components/text-editor.vue"),
  },
  {
    path: "/auto-complete-input",
    name: "auto-complete-input",
    component: () => import("@/components/auto-complete-input.vue"),
  },
  {
    path: "/date-picker",
    name: "date-picker",
    component: () => import("@/components/date-picker.vue"),
  },
  {
    path: "/dialog",
    name: "dialog",
    component: () => import("@/components/dialog.vue"),
  },
  {
    path: "/pagination",
    name: "pagination",
    component: () => import("@/components/pagination.vue"),
  },
  {
    path: "/stepper",
    name: "stepper",
    component: () => import("@/components/stepper.vue"),
  },
  {
    path: "/charts",
    name: "charts",
    component: () => import("@/components/charts.vue"),
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("@/components/tabs.vue"),
  },
  {
    path: "/landing-page",
    name: "landing-page",
    component: () => import("@/components/landing-page.vue"),
  },
  {
    path: "/best-selling",
    name: "BestSelling",
    component: () => import("@/components/BestSelling.vue"),
  },
  {
    path: "/statistics",
    name: "statistics",
    component: () => import("@/components/statistics.vue"),
  },
  {
    path: "/latest-news-update",
    name: "LatestNewsUpdate",
    component: () => import("@/components/LatestNewsUpdate.vue"),
  },
  {
    path: "/our-service-component",
    name: "OurServiceComponent",
    component: () => import("@/components/OurServiceComponent.vue"),
  },
  {
    path: "/posts-component",
    name: "PostsComponent",
    component: () => import("@/components/PostsComponent.vue"),
  },
  {
    path: "/reviews-component",
    name: "ReviewsComponent",
    component: () => import("@/components/ReviewsComponent.vue"),
  },
  {
    path: "/pricing-card",
    name: "PricingCard",
    component: () => import("@/components/PricingCard.vue"),
  },
  {
    path: "/team-cards",
    name: "TeamCards",
    component: () => import("@/components/TeamCards.vue"),
  },
  {
    path: "/breadcrumbs-one",
    name: "breadcrumbs-one",
    component: () => import("@/components/breadcrumbs-one.vue"),
  },
  {
    path: "/daily-growth-chart",
    name: "daily-growth-chart",
    component: () => import("@/components/daily-growth-chart.vue"),
  },
  {
    path: "/range-slider",
    name: "range-slider",
    component: () => import("@/components/range-slider.vue"),
  },
  {
    path: "/skeleton-loader",
    name: "skeleton-loader",
    component: () => import("@/components/skeleton-loader.vue"),
  },
  {
    path: "/skeleton-loader-two",
    name: "skeleton-loader-two",
    component: () => import("@/components/skeleton-loader-two.vue"),
  },
  {
    path: "/progress-bar",
    name: "progress-bar",
    component: () => import("@/components/progress-bar.vue"),
  },
  {
    path: "/scroll-to-top",
    name: "scroll-to-top",
    component: () => import("@/components/scroll-to-top.vue"),
  },
];
