<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/" class="link" @increment="increment">Go to Home</router-link>
      <router-link to="/about" class="link">Go to About</router-link>
    </p>
    <router-view :counter="counter" @increment="increment"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment: function(value) {
      this.counter = this.counter + value;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
}
</style>
