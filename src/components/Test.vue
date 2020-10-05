<template>
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</template>

<script>
export default {
 data(){
     return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
     }
 }
}
</script>

<style>

</style>