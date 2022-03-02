<script>
export default {
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    onInput(e) {
      this.txt = e.target.value;
    },
  },
};
</script>

<template>
  <input type="text" :value="txt" @input="onInput" placeholder="Input text" />
  <p>{{ txt }}</p>
</template>
