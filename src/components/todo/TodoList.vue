<template>
  <div class="todo__list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @edit="$emit('edit', $event)"
      @remove="$emit('remove', $event)"
      @done="$emit('done', $event)"
    />
  </div>
</template>

<script setup>
import TodoItem from "@/components/todo/TodoItem.vue";
defineProps(["todos", "edit", "remove", "done"]);
defineEmits(["edit", "remove", "done"]);
</script>

<style lang="scss" scoped>
.todo__list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
