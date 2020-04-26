<template>
  <div>
    <input
      class="signup-input"
      v-model="firstName"
      type="text"
      id="first-name"
      name="first-name"
      placeholder="First Name"
      required
    />

    <input
      class="signup-input"
      v-model="lastName"
      type="text"
      id="last-name"
      name="last-name"
      placeholder="Last Name"
      required
    />

    <input
      class="signup-input"
      v-model="username"
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      required
    />

    <input
      class="signup-input"
      v-model="password"
      @keydown.enter="submit()"
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
    />

    <button type="button" @click="subscribe()">Subscribe</button>
    <button type="button" @click="$emit('cancel-sign-up')">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'sign-up',
  data() {
    return {
      username: null,
      password: null,
      firstName: null,
      lastName: null,
    };
  },

  methods: {
    subscribe() {
      //validate
        //POST
      console.log("username: ", this.username);
      console.log("password: ", this.password);
      console.log("first name: ", this.firstName);
      console.log("last name: ", this.lastName);
    }
  }
};
</script>

<style>
.signup-input {
  display: block;
  margin: 0 auto 5px;
}
</style>
