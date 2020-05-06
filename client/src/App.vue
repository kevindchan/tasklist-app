<template>
  <div id="app">
    <!-- TODO: emit 'signed-out' from dashboard through logout -->
    <Dashboard v-if="authenticated" @logged-out="authenticated = false"/>
    <Landing v-else @authenticated="authenticated = true"/>

    <List />
    <List />
  </div>
</template>

<script>
  import Landing from './views/Landing.vue';
  import Dashboard from './views/Dashboard.vue';
  import List from './components/List.vue';

  export default {
    name: 'landing',

    components: {
      Landing,
      Dashboard,
      List,
    },

    created() {
      //check token, cookie, etc. to see if user is logged in
    },

    data() {
      return {
        authenticated: false,
      };
    },
  }
</script>

<style lang="less">
  body {
    background-color: lightsalmon;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
