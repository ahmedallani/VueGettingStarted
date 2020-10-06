<template>
  <div>
    <h1>Change</h1>
    <button @click="changeState">Increment</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeState() {
      this.$store.commit('increment', 3)
      console.log(this.$store.state.count)
    }
  }
};
</script>

<style>
</style>