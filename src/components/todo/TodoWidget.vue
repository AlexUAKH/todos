<template>
  <div class="todo">
    <h1 class="todo__title">todo list</h1>
    <TodoCreate class="todo__create" @create="createTodo" />
    <TodoList
      v-if="todos.length"
      class="todo__list"
      :todos="todos"
      @edit="editTodo"
      @remove="deleteTodo"
      @done="handleDone"
    />
    <div v-else>Don't find any todos.</div>
    <BaseButton
      v-if="todos.length"
      class="todo__remove-btn"
      :disabled="!completedTasks.length"
      @click="deleteCompleted"
    >
      Remove all completed
    </BaseButton>
  </div>
</template>

<script setup>
import TodoList from "@/components/todo/TodoList.vue";
import TodoCreate from "@/components/todo/TodoCreate.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { computed, onMounted, reactive, watch } from "vue";
let todos = reactive([]);

onMounted(() => {
  const localTodo = JSON.parse(localStorage.getItem("todos"));
  if (localTodo) {
    todos.push(...localTodo);
  }
});
const createTodo = (task) => {
  const id = todos.length ? todos[0].id + 1 : 10;
  const newTodo = {
    id,
    task,
    done: false
  };
  todos.unshift(newTodo);
};
const deleteTodo = (todo) => {
  todos.splice(todos.indexOf(todo), 1);
};
const editTodo = (todo) => {
  const index = todos.findIndex((el) => el.id === todo.id);
  todos[index] = { ...todo };
};
const handleDone = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index].done = !todos[index].done;
};
const deleteCompleted = () => {
  const confirm = window.confirm(
    "All completed tasks will be deleted. Confirm?"
  );
  if (confirm) {
    completedTasks.value.forEach((todo) => {
      deleteTodo(todo);
    });
  }
};
const completedTasks = computed(() => {
  const completed = todos.filter((todo) => todo.done);
  return completed.length ? completed : [];
});
watch(
  todos,
  () => {
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.todo {
  width: 100%;
  border: 2px solid $light-gray;
  padding: 1rem;
  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
  }
  &__create {
    margin-bottom: 10px;
  }
  &__remove-btn {
    margin: 20px 0 0 auto;
  }
  @media (min-width: $md) {
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    &__title {
      font-size: 2.5rem;
    }
  }
}
</style>
