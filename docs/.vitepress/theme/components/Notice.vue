<template></template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useData } from "vitepress";

const data = useData();
// data.page.value.frontmatter.hero.tagline = "呵呵";
const page = data.page;

page.value.frontmatter.hero.tagline = "new tagline";

console.log("res", data.page.value.frontmatter.hero.tagline);
</script>

<style scoped></style>
