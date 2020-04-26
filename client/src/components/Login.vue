<template>
  <div>
    <input
      class="login-input"
      v-model="username"
      @keydown.enter="login()"
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      required
    />

    <input
      class="login-input"
      v-model="password"
      @keydown.enter="login()"
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
    />

    <p v-if="loginError" class="error-text">Incorrect Username and/or Password</p>

    <button 
      :disabled="isLoginDisabled" 
      @click="login()" 
      type="button" 
    >
      Login
    </button>

    <button @click="$emit('sign-up')" type="button" >Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: null,
      password: null,
      loginError: false,
    };
  },

  methods: {
    login() {
      //TODO: use axios and make post request for authentication
      if (!this.isLoginDisabled) {
        if (this.username === 'admin' && this.password === 'admin') {
          this.$emit('authenticated');
        } else {
          this.loginError = true;
        }
      }
    },
  },

  computed: {
    isLoginDisabled() {
      return this.username === null || this.password === null;
    }
  },

  watch: {
    //TODO: refactor username and password to use one function
    username: function(newVal, oldVal) {
      if (oldVal !== newVal && this.loginError) {
        this.loginError = false;
      }
    },

    password: function(newVal, oldVal) {
      if (oldVal !== newVal && this.loginError) {
        this.loginError = false;
      }
    },
  }
};
</script>

<style>
/* TODO: same style in both login and signup */
.login-input {
  display: block;
  margin: 0 auto 5px;
}

/* TODO: create global css file and insert error-text or use pre-existing */
.error-text {
  font-size: 10px;
  color: red;
}
</style>
