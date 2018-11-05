// v-on: === @ . this is listening for an event
<template>
  <div>
    <input @input="onInput" />
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput: function(event) {
        // console.log(event.target.value);
        // emit is used to communicate fromt he child component to the parent.
        this.$emit('termChange', event.target.value);
      }
    }
  };
</script>

<style scoped>
  input {
    width: 75%;
  }
  div{
    text-align: center;
    margin: 20px;
  }
</style>