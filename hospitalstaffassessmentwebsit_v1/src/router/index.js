import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserQRcode from "../views/User.vue";
import HomeMobile from "../views/HomeMobile.vue";
import Backstage from "../views/Backstage.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),

    // path: "/",
    // name: "Home",
    // component: Home,
    // children: [
    //     {
    //     path: "/users/:userID",
    //     component: UserQRcode
    //   }
    // ]
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        name: "users",
        path: "/users/:userID",
        component: UserQRcode,
        props: (route) => route.params,
      },
    ],
    // path: "/login",
    // name: "Login",
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/homeMobile",
    name: "HomeMobile",
    component: HomeMobile,
    children: [
      {
        path: "/mobile/users/:userID",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeMobile.vue"),
      },
    ],
  },
  {
    path: "/backstage",
    name: "Backstage",
    component: Backstage,
    children: [
      {
        name: "backstage",
        path: "/backstage/:userID",
        component: Backstage,
        props: (route) => route.params,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
