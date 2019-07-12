<template>
  <div class="login-success">
    <p>login success</p>
    <div class="nav-links">
      <a @click="click">click</a>
      <router-link to="/login">Try login</router-link>
    </div>
  </div>
</template> 

<script>
export default {
  name: "LoginSuccess",
  methods: {
    click(){
      console.log(this.$root.username);
    }
  }
};
</script>

<style scoped>
  .login-success{
    width: 100%;
    text-align: center;
  }
  .login-success p{
    color: #fff;
    padding: 10px; 
    background-color: #1abc9c;
  }
  .nav-links{
    /* background-color:  */
  }
</style>


