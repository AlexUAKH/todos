<template>
  <!--  <Layout />-->
  <div class="_container">
    <BaseButton>apply now</BaseButton>
    <BaseInput label="Name" />
    <router-view />
  </div>
</template>

<script setup>
import BaseButton from "./components/base/BaseButton.vue";
import BaseInput from "./components/base/BaseInput.vue";
// import { useRoute } from "vue-router";
// import { computed, defineAsyncComponent } from "vue";
//
// const route = useRoute();
// const Layout = computed(() => {
//   if (route.meta && route.meta.layout === "main") {
//     return defineAsyncComponent(() => import("@/layout/MainLayout"));
//   } else {
//     return defineAsyncComponent(() => import("@/layout/DefaultLayout"));
//   }
// });
</script>

<!--<style scoped>-->
<!--</style>-->
