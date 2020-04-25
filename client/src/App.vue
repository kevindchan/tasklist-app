<template>
  <div id="app">
    <img alt="logo" src="./assets/tasklist_icon.png" style="width:200px;" />
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
