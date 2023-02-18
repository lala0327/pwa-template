import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/pages/Home.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("./components/pages/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  // scrollBehavior() {
  //   // always scroll to top
  //   return { top: 0 }
  // },
});

// ----------- 下方為全域每個 route 都會執行的動作 -----------
// router.beforeResolve(() => { });

// router.afterEach(() => { });

export default router;
