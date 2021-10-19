<template>
    <div class="container grid-xs py-2">
        <h1 class="title">What do you have to do?</h1>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.description" id="home-input_todo-color" class="form-input" placeholder="New todo">
          <button id="home-add-color" class="btn btn-primary input-group-btn">Add</button>
        </div>
      </form>
      <div class="todo-list">
        <todo v-for="t in todos" :key="t.id" @toggle="toggleTodo" @remove="removeTodo" :todo="t"/>
      </div>
    </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: "app",
  components: { Todo },
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
    },
    toggleTodo(todo) {
      const index = this.todos.findIndex(item => item.id === todo.id);
      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, { ...this.todos[index], checked });
      }
    },
    removeTodo(todo) {
      const index = this.todos.findIndex(item => item.id === todo.id);
      if (index > -1) {
        this.$delete(this.todos, index);
      }
    }
  }
};
</script>

<style scoped>

h1{
    max-width: 496px;
    font-size: 28px;
    color: #EAECEE;
}
.title{
    text-align: center;
}
.todo-list {
  color: white;
  padding-top: 2rem;
}
input, button{
    border-radius: 10px;
}
#home-add-color{
  background-color: #2E4053;
  border-color: #2E4053;
  color: #EAECEE;
}
#home-input_todo-color{
  border-color: #2E4053;
}
</style>

