<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";

const correctGap = ref(false);
</script>

<template>
  <form
    class="flex max-w-96 flex-col rounded-md border border-black p-4"
    :class="correctGap && 'gap-2'"
  >
    <label class="flex items-center justify-between">
      <span class="shrink-1 grow">
        {{
          correctGap ? "✔ Espacement cohérent" : "❌ Bug de gestalt proximité"
        }}
      </span>
      <input type="checkbox" class="toggle shrink-0" v-model="correctGap" />
    </label>
    <label class="flex flex-col">
      <span>Nom*</span>
      <input
        type="text"
        name="lastname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: GUENEGO"
      />
    </label>
    <label class="flex flex-col">
      <span>Prénom*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: Jean-Louis"
      />
    </label>
    <label class="flex flex-col">
      <span>Entreprise*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: JLG Consulting"
      />
    </label>
    <label class="flex flex-col">
      <span>Fonction*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: Consultant UX"
      />
    </label>
  </form>
</template>
