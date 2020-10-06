<template>
  <div>
    <h1>Lifecycle</h1>
    <h2>created</h2>
    <h2>mounted</h2>
    <h2>updated</h2>
    <input v-model="change" placeholder="change" />
    <h2>beforeDestroy</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: '',
    };
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy(){
    console.log("beforeDestroy")
  }
};
</script>

<style scoped>
input,label, div{
  margin: 5px;
}

</style>