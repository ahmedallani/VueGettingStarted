<template>
  <div>
    <ol>
      <todo v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo>
    </ol>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" }
      ]
    };
  }
};
</script>

<style scoped>
</style>