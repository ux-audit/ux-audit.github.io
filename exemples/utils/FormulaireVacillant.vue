<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";

const correctCLS = ref(false);
const lastname = ref("");
const firstname = ref("");
const lastnameErrorMsg = ref("");
const firstnameErrorMsg = ref("");

const check = (field: Ref<string>): string => {
  if (field.value.length === 0) {
    return "Champ obligatoire";
  }
  return "";
};

watchEffect(() => {
  console.log("watch effect");
  lastnameErrorMsg.value = check(lastname);
  firstnameErrorMsg.value = check(firstname);
});
</script>

<template>
  <form class="flex max-w-96 flex-col gap-2 rounded-md border border-black p-4">
    <label class="flex items-center justify-between">
      <span class="shrink-1 grow">
        {{ correctCLS ? "✔ Plus de CLS" : "❌ CLS sur erreur" }}</span
      >
      <input type="checkbox" class="toggle shrink-0" v-model="correctCLS" />
    </label>
    <label class="flex flex-col">
      <span>Nom*</span>
      <input
        type="text"
        name="lastname"
        v-model="lastname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: GUENEGO"
      />
      <span class="flex font-bold" :class="correctCLS && 'h-6'">{{
        lastnameErrorMsg
      }}</span>
    </label>
    <label class="flex flex-col">
      <span>Prénom*</span>
      <input
        type="text"
        name="firstname"
        v-model="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: Jean-Louis"
      />
      <span class="flex font-bold" :class="correctCLS && 'h-6'">{{
        firstnameErrorMsg
      }}</span>
    </label>
  </form>
</template>
