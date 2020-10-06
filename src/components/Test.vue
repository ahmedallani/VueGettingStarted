<template>
  <div>
    <div>
    <label for="firstName">First Name:</label>
    <input v-model="firstName" name="firstName" />
    </div>
    <div>
    <label for="lastName">Last Name:</label>
    <input v-model="lastName" />
    </div>
    <div id="demo">{{ fullName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Foo5',
      lastName: 'Bar2',
    };
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
};
</script>

<style scoped>
input,label, div{
  margin: 5px;
}

</style>