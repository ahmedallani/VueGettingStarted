<template>
  <div>
    <button @click="changeAlive()" class="mybutton" :style="actionStyle()">
      {{ action() }}
    </button>
    <Life v-if="alive" />
    <div v-else>Destroyed</div>
  </div>
</template>

<script>
import Life from "./Life";
export default {
  components: {
    Life
  },
  data() {
    return {
      alive: true,
    };
  },
  updated() {
    console.log(this.alive,this.action)
  },
  methods:{
    changeAlive:function(){
      console.log("changeAlive")
      this.alive = !this.alive
    },
    action:function() {
      return this.alive ? "Destroy" : "Create";
    },
    actionStyle:function() {
      let color = this.alive ? "red" : "green";
      return { backgroundColor: color };
    }
  }
};
</script>

<style scoped>
.mybutton {
  padding: 10px;
  color: white;
  font-weight: bold;
  border:none;
  font-size: 16px;
  border-radius: 10px;
  margin: 10px;
}
</style>