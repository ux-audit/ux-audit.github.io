<script setup lang="ts">
import { faPlus, faRotateRight } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="flex">
    <button class="btn btn-neutral">
      <FaIcon :icon="faRotateRight" />
    </button>
    <button class="btn btn-neutral">
      <FaIcon :icon="faPlus" />
    </button>
  </div>
</template>
