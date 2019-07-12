<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import LoginPage from "./components/Login";

export default {
  name: "App",
  components: {
    HelloWorld,
    LoginPage
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  background-color: #e9ecef;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  display:flex;
  justify-content: center;
}
</style>
