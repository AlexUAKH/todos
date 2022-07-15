<template>
  <div class="control" :class="{ invalid: invalid }">
    <label class="control__label">{{ label }}</label>
    <input
      class="control__input"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete=""
    />
    <div v-if="invalid && error" class="control__hint">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: String },
  label: { type: String, required: true },
  invalid: { type: Boolean, default: false },
  errors: { type: Object, default: () => {} }
});

defineEmits(["update:modelValue"]);
const error = computed(() =>
  Object.values(props.errors)
    .filter((el) => el !== "")
    .join(" and ")
);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.control {
  display: flex;
  flex-direction: column;
  &__label {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.2;
    padding-left: 1px;
    margin: 0 0 7px 0;
    color: $dark;
  }
  &__input {
    height: 53px;
    padding: 5px 10px;
    font-size: 1.3rem;
    border: 1px solid $input-border;
    &:focus {
      border-color: $input-focus-border;
    }
  }
  &__hint {
    margin-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    color: inherit;
    padding-left: 21px;
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0.55rem;
      left: 0;
      width: 0.75rem;
      height: 2px;
      background-color: $error;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  &.invalid {
    color: $error;
    .control__input,
    .control__input:focus {
      border-color: $input-error-border !important;
    }
  }
}
</style>
