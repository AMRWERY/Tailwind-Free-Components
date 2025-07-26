export default [
  {
    path: "/table-one",
    name: "TableOne",
    component: () => import("@/components/tables/TableOne.vue"),
  },
  {
    path: "/table-two",
    name: "TableTwo",
    component: () => import("@/components/tables/TableTwo.vue"),
  },
  {
    path: "/table-with-pagination",
    name: "table-with-pagination",
    component: () => import("@/components/tables/table-with-pagination.vue"),
  },
];
