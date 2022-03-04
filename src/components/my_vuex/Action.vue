<template>
  <h3>Action</h3>
  <button @click="btnClick">
    Action: Load data, isLoading = {{ isLoading }}
  </button>
  <p>Display `List/Loading...` by `store.state.isLoading`</p>
  <p v-if="isLoading">Loading...</p>
  <ul v-else>
    <li v-for="task in tasks" :key="task.id">{{ task.text }}</li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tasks: [
        {
          id: 0,
          text: "Empty",
        },
      ],
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapActions(["actionGetTodos"]),
    btnClick() {
      // goi 1 action
      // this.$store.dispatch('actionGetTodos');
      this.actionGetTodos()
        .then(data => {
          this.tasks = JSON.parse(JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>