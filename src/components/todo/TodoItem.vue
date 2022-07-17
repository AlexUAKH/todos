<template>
  <div class="todo__item item">
    <BaseCheckbox v-model:checked="done" :size="20" class="item__checkbox" />
    <div
      v-show="!editing"
      class="item__task"
      :class="{ done }"
      @click="toggleEditing"
      ref="container"
    >
      {{ todo.task }}
    </div>
    <textarea
      v-show="editing"
      ref="input"
      v-model="task"
      class="item__textarea"
      @keyup.enter="() => input.blur()"
      @focusout="toggleEditing"
    />
    <div
      class="item__edit-icon"
      :class="{ active: editing }"
      @click="toggleEditing"
    >
      <IconEdit v-if="!editing" />
      <IconDone v-else />
    </div>
    <IconDelete class="item__delete-icon" @click="$emit('remove', todo)" />
  </div>
</template>

<script setup>
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import IconDone from "@/components/icons/IconDone.vue";
import { nextTick, ref, watch } from "vue";

const props = defineProps(["todo"]);
const emit = defineEmits(["edit", "remove", "done"]);
const done = ref(props.todo.done);
const editing = ref(false);
const task = ref(props.todo.task);
const input = ref(null);
const container = ref(null);

const toggleEditing = () => {
  editing.value = !editing.value;
};
watch(editing, (val) => {
  if (!val) {
    emit("edit", { ...props.todo, task });
  } else {
    const currentHeight = container.value.clientHeight;
    nextTick(() => {
      input.value.focus();
      // input.value.style.height = `${currentHeight}px`;
      input.value.rows = Math.floor(currentHeight / 25.6);
    });
  }
});
watch(done, () => {
  emit("done", props.todo.id);
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.item {
  padding: 15px;
  min-height: 60px;
  border: 1px solid $light-gray;
  border-radius: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  &:nth-child(n) {
    background-color: #f0fff0;
  }
  &:nth-child(2n) {
    background-color: #e6e6fa;
  }
  &__checkbox {
    flex-shrink: 0;
    margin-right: 10px;
  }
  &__task {
    flex: 1 1 auto;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 10px;
    &.done {
      text-decoration: line-through;
    }
  }
  &__textarea {
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    line-height: 1.6;
    resize: none;
  }
  &__edit-icon {
    margin: 0 10px;
    opacity: 0.3;
    display: flex;
    &.active {
      opacity: 1;
    }
  }
  &__delete-icon {
    flex: 0 0 auto;
  }
}
</style>
