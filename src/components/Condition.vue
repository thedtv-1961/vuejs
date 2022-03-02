<script>
export default {
  data() {
    return {
      val: false,
    };
  },
  methods: {
    onClick() {
      this.val = !this.val;
    },
  },
};
</script>

<template>
  <button @click="onClick">Current Value = {{ val }}</button>
  <p v-if="val">If True</p>
  <p v-else>If False</p>
  <hr>
  <p v-show="val">Show True</p>
</template>
