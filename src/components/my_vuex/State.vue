<template>
  <h3>Sử dụng State</h3>
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
      // Su dung ham trong mutation
      this.$store.commit("increment");
    },
  },
};
</script>
