<template>
  <main class="main _container">
    <div class="main__content">
      <nav class="main__nav">
        <BaseButton @click="() => router.push('/')">home</BaseButton>
        <BaseButton @click="logout">logout</BaseButton>
      </nav>
      <div class="main__thanks">
        <h2>Thank you, {{ name }}!</h2>
      </div>
      <section class="main__todo">
        <TodoWidget />
      </section>
    </div>
  </main>
</template>

<script setup>
import TodoWidget from "@/components/todo/TodoWidget.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useRouter } from "vue-router";
import { useUser } from "@/hooks/user";
import { useLogout } from "@/hooks/logout";

const router = useRouter();
const { name } = useUser();
const logoutLocal = useLogout();
const logout = () => {
  logoutLocal();
  router.push("/");
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.main {
  padding-bottom: 10px;
  &__content {
    background: $white;
    padding: 5px 0 0 0;
  }
  &__nav {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__thanks {
    font-style: normal;
    font-weight: 700;
    line-height: 1.6;
    color: $dark;
    text-align: center;
    margin-top: 10px;
    & > h2 {
      font-size: 30px;
    }
  }
  &__todo {
    margin-top: 10px;
  }
  @media (min-width: $md) {
    padding-bottom: 40px;
    &__content {
      padding: 20px;
    }
    &__thanks {
      margin-top: 12px;
      & > h2 {
        font-size: 45px;
      }
    }
    &__todo {
      margin-top: 20px;
    }
  }
  @media (min-width: $xl) {
    &__thanks > h2 {
      font-size: 60px;
    }
  }
}
</style>
