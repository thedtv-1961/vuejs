<template>
  <h3>Sử dụng State và Mutation (method) </h3>
  <button @click="buttonClick">State.count = {{ count }}</button>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["count"]), // cai nay return la 1 object
  },
  methods: {
    buttonClick() {
      // Su dung mutation trong method, vi mutation la method
      this.$store.commit("increment");
    },
  },
};
</script>
