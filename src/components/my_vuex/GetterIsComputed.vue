<template>
  <h3>Getters is Computed</h3>
  <p>Checkbox check/uncheck thì dùng v-mode để tương tác cho nhanh</p>
  <p>All todos:</p>
  <ul>
    <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }">
      <input type="checkbox" v-model="todo.done"  />
      {{ todo.text }}
    </li>
  </ul>
  <p>All todos done:</p>
  <ul>
    <li v-for="d in todoDones" :key="d.id">
      {{ d.text }}
    </li>
  </ul>
  <p>Number of Done = {{ countTodoDone }}</p>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["todos"]),
    ...mapGetters([
      'todoDones',
      'countTodoDone',
    ]),
  },
  methods: {
    checkOnTodo() {

    }
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
}
</style>