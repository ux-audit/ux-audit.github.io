<script setup lang="ts">
import { ref } from "vue";

const correctCLS = ref(false);
const isRunning = ref(false);
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <label
      class="flex w-full max-w-72 items-center justify-between rounded-md border-2 border-black p-4"
    >
      <span class="shrink-1 grow">
        {{ correctCLS ? "✔ Plus de CLS" : "❌ CLS sur erreur" }}</span
      >
      <input type="checkbox" class="toggle shrink-0" v-model="correctCLS" />
    </label>
    <button
      @click="isRunning = !isRunning"
      class="btn btn-primary"
      :class="correctCLS && 'w-32'"
    >
      {{ isRunning ? "Pause" : "Play" }}
    </button>
  </div>
</template>
