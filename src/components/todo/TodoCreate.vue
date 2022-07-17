<template>
  <div class="todo__create">
    <BaseInput
      v-model="task.value"
      placeholder="Going to do"
      @keyup.enter="handleCreate"
      :height="48"
      class="todo__input"
    />
    <BaseButton
      :height="48"
      @click="handleCreate"
      :disabled="!task.valid"
      class="todo__create-btn"
    />
  </div>
</template>

<script setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useControl } from "@/hooks/control";
import { required } from "@/helpers/validators";
import { reactive } from "vue";

const emit = defineEmits(["create"]);
const task = reactive(useControl({ value: "", validators: { required } }));

const handleCreate = () => {
  if (task.value) {
    emit("create", task.value);
    task.value = "";
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.todo__create {
  display: flex;
  &__input {
    flex: 1 1 auto;
  }
  &-btn {
    flex: 0 0;
    position: relative;
    &:after {
      position: absolute;
      content: "+";
      font-size: 40px;
      font-weight: 700;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: $md) {
    gap: 0.5rem;
    &-btn {
      padding-left: 70px;
      &:after {
        font-size: 50px;
      }
    }
  }
}
</style>
