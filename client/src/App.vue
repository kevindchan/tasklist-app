<template>
  <div id="app">
    <!-- TODO: emit 'signed-out' from dashboard through logout -->
    <Dashboard v-if="authenticated" @logged-out="authenticated = false"/>
    <Landing v-else @authenticated="authenticated = true"/>
  </div>
</template>

<script>
  import Landing from './views/Landing.vue';
  import Dashboard from './views/Dashboard.vue';

  export default {
    name: 'landing',

    components: {
      Landing,
      Dashboard,
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
    background-color: lightsalmon;;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
