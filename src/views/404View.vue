<template>
  <main class="not-found _container">
    <p class="not-found__text">
      Unfortunately, page you are requesting does not exist.
      <router-link to="/">Go to home page</router-link>
    </p>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    font-size: 1.2rem;
  }
  & a {
    color: $primary;
  }
}
</style>
