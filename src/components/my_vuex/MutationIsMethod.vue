<template>
  <h3>Mutation is Method</h3>
  <p>Store.state.count = {{ count }}</p>
  <button @click="btnClick">Increment using mutation</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(['increment']),
    btnClick() {
        this.increment(2);
    }
  },
};
</script>
