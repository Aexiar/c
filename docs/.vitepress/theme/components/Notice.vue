<template></template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useData } from "vitepress";

const res = useData();
res.page.value.frontmatter.hero.tagline = "呵呵";
console.log("res", res.page.value.frontmatter.hero.tagline);
</script>

<style scoped></style>
