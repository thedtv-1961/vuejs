import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

let id = 0;
const store = createStore({
  state() {
    return {
      count: 0,
      todos: [ 
        {
          id: id++,
          text: 'html',
          done: true,
        },
        {
          id: id++,
          text: 'css',
          done: true,
        },
        {
          id: id++,
          text: 'js',
          done: false,
        },
      ],
    }
  },
  mutations: { // method
    increment(state, val = 1) { // tham so 1 la state
      state.count += val;
    },
  },
  getters: { // computed
    todoDones(state, getters) { // tham so 1 la state, tham so 2 la getters
      return state.todos.filter((t) => t.done)
    },
    countTodoDone(state, getters) {
      return getters.todoDones.length;
    }
  }
})

const app = createApp(App);
// app.mount('#app');
app.use(store).mount('#app');
