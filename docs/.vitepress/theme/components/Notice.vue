<template>哈哈</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useData } from "vitepress";

const res = useData();
console.log("res", res);
</script>

<style scoped></style>
