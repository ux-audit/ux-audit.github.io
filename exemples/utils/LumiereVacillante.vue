<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { sleep } from "./sleep";

const isFleckering = ref(false);

const startFlickering = async () => {
  while (isFleckering.value) {
    await sleep(1000 * Math.random());
    window.document.body.classList.add("blackBackground");
    await sleep(1000 * Math.random());
    window.document.body.classList.remove("blackBackground");
  }
};

watchEffect(() => {
  if (isFleckering.value) {
    startFlickering();
  }
});
</script>

<template>
  <label
    class="flex max-w-72 items-center justify-between rounded-md border-2 border-black p-4"
  >
    <span>Lumière vacillante</span>
    <input type="checkbox" v-model="isFleckering" class="toggle" />
  </label>
</template>
