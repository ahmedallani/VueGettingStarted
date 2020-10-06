<template>
  <span v-bind:title="message" class="msg" :class="active ? 'active' : 'notactive'">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</template>

<script>
export default {
 data(){
     return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        active:false
     }
 }
}
</script>

<style>
.msg{
  color: white;
  padding: 10px;
  font-weight: bold;
}
.active{
  background-color: aquamarine;
  padding: 10px;
}
.notactive{
  background-color: red;
}
</style>