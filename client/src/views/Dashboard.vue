<template>
  <div id="dashboard-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'dashboard',

    components: {
      Navbar,
    },

    // created() {
    //   this.$router.replace({ name: 'Boards' })
    // },

    data() {
      return {

      };
    },

    methods: {
      logOut() {
        this.$emit('logged-out');
      },
    }
  }
</script>

<style>
#dashboard-container {
  width: 100%;
}
</style>