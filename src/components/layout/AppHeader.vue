<template>
  <header class="header">
    <div class="header__content">
      <div class="_container">
        <div class="header__logo" @click="router.push('/')">
          <img src="@/assets/img/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  &__content {
    height: 80px;
    background: linear-gradient($header-gradient-1, $header-gradient-2);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__logo {
    width: 56px;
    height: 35px;
    & img {
      max-width: 100%;
    }
  }
  @media (min-width: $md) {
    height: 150px;
    background: $dark;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__content {
      flex: 0 0 96px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &__logo {
      width: 103px;
      height: 66px;
    }
  }
}
</style>
