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
    <div class="todo__hint">** Ctrl + Enter to save, Enter to next line</div>
  </div>
</template>

<script setup>
import TodoItem from "@/components/todo/TodoItem.vue";
defineProps(["todos", "edit", "remove", "done"]);
defineEmits(["edit", "remove", "done"]);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.todo {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__hint {
    display: none;
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0.5;
    margin-top: 0.6rem;
  }
  @media (min-width: $md) {
    &__hint {
      display: block;
    }
  }
}
</style>
