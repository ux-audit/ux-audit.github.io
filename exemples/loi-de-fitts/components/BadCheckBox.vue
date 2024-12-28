<script setup lang="ts">
import { useData } from "vitepress";

const { isDark } = useData();
</script>

<template>
  <label
    class="flex cursor-pointer gap-2 rounded-md border border-[--vp-c-gray-1] p-2"
  >
    <input type="checkbox" v-model="isDark" />
    <span>Activer le dark thème</span>
  </label>
</template>
