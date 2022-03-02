<script>
let id = 0;

export default {
  data() {
    return {
      todoText: "",
      todos: [
        {
          id: id++,
          text: "Html",
        },
        {
          id: id++,
          text: "Css",
        },
        {
          id: id++,
          text: "Js",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: id++,
        text: this.todoText,
      });
      this.todoText = "";
    },
    removeTodo(todo) {
			// Remove thì gán lại filter là đc
      this.todos = this.todos.filter((t) => {
        return t !== todo;
      });
    },
  },
};
</script>

<template>
  <input
    v-model="todoText"
    type="text"
    placeholder="input text"
    @keyup.enter="addTodo"
  />
  <button @click="addTodo">Add</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
</template>
