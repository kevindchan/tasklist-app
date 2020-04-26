<template>
  <div class="landing-container">
    <img alt="logo" src="../assets/tasklist_icon.png" style="width:200px;" />
    <Login v-if="!isSigningUp" @authenticated="$emit('authenticated')" @sign-up="isSigningUp = true"/>
    <SignUp v-else @cancel-sign-up="isSigningUp = false"/>
  </div>
</template>

<script>
  import Login from '../components/Login.vue';
  import SignUp from '../components/SignUp.vue';

  export default {
    name: 'landing',

    components: {
      Login,
      SignUp,
    },
    
    data() {
      return {
        isSigningUp: false,
      };
    },
  }
</script>

<style>
  .landing-container {
    padding-top: 100px;
    text-align: center;
  }
</style>