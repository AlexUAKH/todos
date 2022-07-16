<template>
  <div class="base-checkbox">
    <div
      class="base-checkbox__control"
      :class="{ checked }"
      :style="styleOfControl"
      @click="$emit('update:checked', !checked)"
    />
    <div v-if="label" class="base-checkbox__label">
      {{ label }}
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  size: { type: Number, default: 20 },
  checked: { type: Boolean, default: false }
});
defineEmits(["update:checked"]);

const styleOfControl = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}));
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.base-checkbox {
  display: flex;
  align-items: center;
  gap: 15px;
  &__checkbox {
    display: none;
  }
  &__control {
    display: inline-flex;
    border-radius: 50%;
    border: 1px solid $dark;
    background-color: #fff;
    &.checked {
      padding: 2px;
      &:after {
        content: "";
        background-color: $primary;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
