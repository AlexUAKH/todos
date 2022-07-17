<template>
  <Layout />
</template>

<script setup>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import { useRoute } from "vue-router";
import { ref, watch, markRaw } from "vue";

const route = useRoute();
const Layout = ref();
watch(
  () => route.meta?.layout || "default",
  (metaLayout) => {
    metaLayout === "main"
      ? (Layout.value = markRaw(MainLayout))
      : (Layout.value = markRaw(DefaultLayout));
  },
  { immediate: true }
);
</script>
