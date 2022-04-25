<template>
  <p>Value of props = {{ msg || 'no value' }}</p>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
      default: 'default text',
    },
  },
};
</script>
