<template>
  <div>
    <h1>Display</h1>
    <div>Count: {{count}}</div>
    <div>Count2x: {{count2x}}</div>
  </div>
</template>

<script>
export default {
computed:{
  count:function(){
    return this.$store.state.count
  },
  count2x:function(){
    return this.$store.getters.count2x
  }

}
}
</script>

<style>

</style>