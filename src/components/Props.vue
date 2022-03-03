<template>
  <p>Value of props = {{ msg || 'no value' }}</p>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>
