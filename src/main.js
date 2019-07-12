import Vue from "vue";
// import { router } from "./routes";
import routes from "./routes";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

router.beforeEach((to, from, next) => {
  console.log(router.app);
  // console.log(to, from, next);
  //   const authRequired = (to.path === "/loginSuccess" && !this.$root.$data.rememberUser);
  //   if (authRequired) {
  //     return next("/login");
  //   }
  next();
});

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>",
  methods: {}
});
