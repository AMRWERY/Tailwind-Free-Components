export default [
  {
    path: "/basic-rating",
    name: "BasicRating",
    component: () => import("@/components/rating/BasicRating.vue"),
  },
  {
    path: "/disabled-rating",
    name: "DisabledRating",
    component: () => import("@/components/rating/DisabledRating.vue"),
  },
  {
    path: "/colors-rating",
    name: "ColorsRating",
    component: () => import("@/components/rating/ColorsRating.vue"),
  },
  {
    path: "/sizes-rating",
    name: "SizesRating",
    component: () => import("@/components/rating/SizesRating.vue"),
  },
  {
    path: "/view-only-rating",
    name: "ViewOnlyRating",
    component: () => import("@/components/rating/ViewOnlyRating.vue"),
  },
];
