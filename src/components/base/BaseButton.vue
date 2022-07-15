<template>
  <button class="btn" :class="{ fullWidth: fullWidth }" v-bind="$attrs">
    <template v-if="!loading">
      <slot>Ok</slot>
    </template>
    <template v-else>Submitting...</template>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  fullWidth: { type: Boolean, default: false },
  height: { type: Number, default: 35 },
  loading: { type: Boolean, default: false }
});

const height = computed(() => props.height + "px");
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.btn {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 5px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  height: v-bind(height);
  background-color: $primary;
  border: 2px solid $primary;
  cursor: pointer;
  transition: 0.3s ease-out;
  position: relative;
  &.fullWidth {
    width: 100%;
  }
  &:not([disabled]):active {
    top: 2px;
    left: 2px;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
}

@media (min-width: $md) {
  .btn:not([disabled]):hover {
    color: $primary;
    background-color: $white;
    border-color: $primary;
  }
}
</style>
