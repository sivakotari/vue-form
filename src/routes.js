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
