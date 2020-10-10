<template>
  <div>
    <div>Home Page</div>
    <button v-on:click="increment">Increment</button>
    <div>Counter:{{counter}}</div>
  </div>
</template>

<script>
export default {
  props: ["counter"],
  methods: {
    increment: function () {
      this.$emit('increment',3)
    }
  }
}
</script>

<style>

</style>