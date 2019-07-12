import Vue from "vue";
// import { router } from "./routes";
import routes from "./routes";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// const router = new VueRouter({routes});
const router = new VueRouter({ mode: "history", routes });

// router.beforeEach((to, from, next) => {
// //   // redirect to login page if not logged in and trying to access a success page
// //   // const publicPages = ["/login"];
// //  // const authRequired = !publicPages.includes(to.path);
// //   const authRequired = (to.path === "/loginSuccess" && !this.$root.$data.rememberUser);
// //   // const loggedIn = this.$root.username;
//   console.log(20,router.app);

// //   if (authRequired) {
// //     return next("/login");
// //   }
//   next();
// });

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>",
  methods: {
    // log: function (e) {
    //   console.log(e);
    // }
  }
});

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app');
