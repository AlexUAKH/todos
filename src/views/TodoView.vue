<template>
  <main class="main _container">
    <div class="main__content">
      <div class="main__thanks">
        <h2>Thank you, {{ user }}!</h2>
      </div>
      <section class="main__todo">
        <TodoWidget />
      </section>
    </div>
  </main>
</template>

<script setup>
import TodoWidget from "@/components/todo/TodoWidget.vue";

const user = localStorage.getItem("user") || "user";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.main {
  padding-bottom: 40px;
  &__content {
    background: $white;
    padding: 20px;
  }
  &__thanks {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 1.6;
    color: $dark;
    text-align: center;
    margin-top: 12px;
  }
  &__todo {
    margin-top: 20px;
  }
}
</style>
