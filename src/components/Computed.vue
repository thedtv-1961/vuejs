<script>
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      isShowAll: true,
      todos: [
        {
          id: id++,
          text: "html",
          done: true,
        },
        {
          id: id++,
          text: "css",
          done: true,
        },
        {
          id: id++,
          text: "js",
          done: true,
        },
        {
          id: id++,
          text: "c#",
          done: false,
        },
      ],
    };
  },
  methods: {
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
    addNewTodo() {
      this.todos.push({
        id: id++,
        text: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
  },
  // Xem Computed trong docs.txt
  computed: {
    hideTodos() {
      // Hàm này dùng thay cho render `todos` bằng `hideTodos`, Ex:`todo in hideTodos`
      return this.isShowAll ? this.todos : this.todos.filter((t) => t.done === false);
    },
  },
};
</script>

<template>
  <input
    v-model="newTodo"
    type="text"
    placeholder="input todo"
    @keyup.enter="addNewTodo"
  />
  <button @click="addNewTodo">Add todo</button>
  <!-- thay đổi 1 giá trị dơn giản thì ko cần tạo hàm, có thể gán luôn trên attr -->
  <button @click="isShowAll = !isShowAll">Hide done = {{ isShowAll }}</button>
  <ul>
    <!-- hiển thị bằng computed `hideTodos` -->
    <li v-for="todo in hideTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: brown;
}
</style>
