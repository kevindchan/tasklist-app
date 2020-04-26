<template>
  <div>
    <Navbar>
      <button @click="logOut()" type="button">Log Out</button>
    </Navbar>
    
    <router-view />
  </div>
  
  <!-- Nav Component -->
  <!-- router-view element -->
</template>

<script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'dashboard',

    components: {
      Navbar,
    },

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

</style>