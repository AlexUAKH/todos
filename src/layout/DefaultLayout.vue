<template>
  <div class="wrapper">
    <header class="header _container">
      <div class="header__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.wrapper {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 350px;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient($header-gradient-1, $header-gradient-2);
  }
  @media (min-width: $md) {
    &:before {
      height: 550px;
    }
  }
  @media (min-width: $xl) {
    &:before {
      height: 797px;
    }
  }
}
.header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 80px;
    height: 51px;
  }
  @media (min-width: $lg) {
    height: 200px;
    &__logo {
      width: 150px;
      height: 96px;
    }
  }
  @media (min-width: $xl) {
    height: 250px;
    &__logo {
      width: 186px;
      height: 119px;
    }
  }
}
</style>
