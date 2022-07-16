<template>
  <div class="wrapper">
    <AppHeader class="header" />
    <router-view class="main" />
    <AppFooter class="footer" />
  </div>
</template>

<script setup>
import AppFooter from "@/components/layout/AppFooter.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header,
.footer {
  flex: 0 0 auto;
}
.main {
  flex: 1 1 auto;
}
</style>
