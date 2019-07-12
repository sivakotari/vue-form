import Vue from "vue";
import VueRouter from "vue-router";
import LoginSuccess from "./components/LoginSuccess";
import LoginPage from "./components/Login";
import ErrorPage from "./components/ErrorPage";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginPage },
  { path: "/login", component: LoginPage },
  { path: "/loginSuccess", component: LoginSuccess },
  { path: "/fof", component: ErrorPage },
  { path: "/*", redirect: "/fof" }
];

export default routes;

// export const router = new VueRouter({
//   mode: "history",
//   routes: [
//     { path: "/", component: LoginPage },
//     { path: "/login", component: LoginPage },
//     { path: "/loginSuccess", component: LoginSuccess },
//     { path: "/*", component: ErrorPage }
//   ]
// });

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a success page
//   const publicPages = ["/login,/*"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = this.$root.username;

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }
//   next();
// });
