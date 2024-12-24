<script setup lang="ts">
import { ref, watchEffect } from "vue";

const name = ref("");
const errorMsg = ref("");

watchEffect(() => {
  console.log("watch effect");
  console.log("name.value.length: ", name.value.length);
  if (name.value.length === 0) {
    errorMsg.value = "Champ Obligatoire.";
    return;
  }
  errorMsg.value = "";
});
</script>

<template>
  <label class="flex flex-col rounded-md border border-black p-4">
    <span>Nom*</span>
    <input
      type="text"
      name="lastname"
      v-model="name"
      class="rounded-md bg-gray-200 p-2"
      placeholder="Ex: GUENEGO"
    />
    <span class="error">{{ errorMsg }}</span>
  </label>
</template>
