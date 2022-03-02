<script>
export default {
  data() {
    return {
      txt: "",
    };
  },
};
</script>

<template>
  <input type="text" v-model="txt" placeholder="Input text" />
  <p>{{ txt }}</p>
</template>
