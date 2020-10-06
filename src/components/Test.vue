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
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    };
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
};
</script>

<style scoped>
input,label, div{
  margin: 5px;
}

</style>