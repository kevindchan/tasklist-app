<template>
  <div>
    <div>
      <label for="username" style="display:block">
        Username:
      </label>
      <input
        v-model="username" 
        type="text" 
        id="username" 
        name="username" 
        placeholder="type here..."
        required
      >
    </div>

    <div>
      <label for="password" style="display:block">
        Password:
      </label>
      <input
        v-model="password"
        @keydown.enter="submit()"
        type="password" 
        id="password" 
        name="password" 
        placeholder="type here..." 
        required
      >
    </div>

    <button type="button" @click="submit()">Login</button>
    <button type="button">Sign Up</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        username: null,
        password: null,
      }
    },

    methods: {
      submit() {
        console.log('username: ', this.username);
        console.log('password: ', this.password);
      },
    }
  }
</script>

<style>

</style>