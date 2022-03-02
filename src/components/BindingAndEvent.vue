<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      return this.counter++;
    }
  }
};
</script>

<template>
  <button @click="increment">Counter = {{ counter }}</button>
</template>
