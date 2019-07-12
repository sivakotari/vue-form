<template>
  <div class="login-form-container">
    <form class="login-form" @submit.prevent="onSubmit">
      <h2>Login</h2>
      <p>
        <label for="username">Username</label>
        <input
          class="styled-box"
          id="username"
          type="text"
          v-model="username"
          placeholder="username"
        >
      </p>

      <p>
        <label for="password">Password</label>
        <input
          class="styled-box"
          id="password"
          type="password"
          v-model="password"
          placeholder="password"
        >
      </p>

      <p>
        <label for="rememberUser">Remember me</label>
        <input id="rememberUser" type="checkbox" v-model="rememberUser">
      </p>

      <p>
        <button class="login-button" :disabled=" !(username && password) ">Login</button>
        <span>(no user validation)</span>
      </p>
    </form>

    <div class="nav-links">
      <router-link to="/loginSuccess">Try direct access</router-link>
    </div>
    <!-- <p v-show="submitted">
      {{username}}
      <span>{{rememberUser}}</span>
    </p>-->
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: null,
      password: null,
      submitted: false,
      rememberUser: false
    };
  },
  methods: {
    onSubmit(e) {
      this.submitted = true;
      this.$router.push("/loginSuccess");
      // const { username, password } = this;
      // console.log(this);
      // if (username && password) {
      //     this.login({ username, password })
      // }
    }
  }
};
</script>

<style scoped>
input.styled-box {
  display: block;
  width: 100%;
  padding: 5px 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
.login-button {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>