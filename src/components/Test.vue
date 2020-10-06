<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
};
</script>

<style scoped>
</style>