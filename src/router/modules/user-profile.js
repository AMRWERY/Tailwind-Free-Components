export default [
  {
    path: "/user-profile-one",
    name: "UserProfileOne",
    component: () => import("@/components/user-profile/UserProfileOne.vue"),
  },
  {
    path: "/user-profile-three-with-form",
    name: "UserProfileThreeWithForm",
    component: () =>
      import("@/components/user-profile/UserProfileThreeWithForm.vue"),
  },
  {
    path: "/user-profile-two",
    name: "UserProfileTwo",
    component: () => import("@/components/user-profile/UserProfileTwo.vue"),
  },
];
