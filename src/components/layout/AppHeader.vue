<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="_container">
        <div class="header__content">
          <div class="header__logo" @click="router.push('/')">
            <img src="@/assets/img/logo.png" alt="logo" />
          </div>
          <nav>
            <ul class="header__links">
              <li class="header__link" @click="() => router.push('/todo')">
                Todo list
              </li>
            </ul>
          </nav>
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
  &__wrapper {
    height: 80px;
    background: linear-gradient($header-gradient-1, $header-gradient-2);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    width: 56px;
    height: 35px;
  }
  &__links {
    display: flex;
  }
  &__link {
    padding: 5px 10px;
    font-size: 1.3rem;
    font-weight: 500;
    color: $white;
    &:not(:last-child) {
      margin-right: 20px;
    }
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: $md) {
    height: 150px;
    background: $dark;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__wrapper {
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
