<template>
  <ul>
    <li v-for="(todo,key) in todos" :key="key">
        {{key + 1}}-{{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  }
};
</script>

<style scoped>
ul{
    list-style-type:none;
}
</style>