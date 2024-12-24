<script setup lang="ts">
import { ref } from "vue";

const correction = ref(false);
</script>

<template>
  <form class="flex max-w-96 flex-col rounded-md border border-black p-4">
    <label class="flex items-center justify-between">
      <span class="shrink-1 grow">
        {{
          correction ? "✔ Espacement cohérent" : "❌ Bug de gestalt proximité"
        }}
      </span>
      <input type="checkbox" class="toggle shrink-0" v-model="correction" />
    </label>
    <label
      class="flex flex-col rounded-md border"
      :class="correction ? 'border-black' : 'border-transparent'"
    >
      <span>Nom*</span>
      <input
        type="text"
        name="lastname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: GUENEGO"
      />
    </label>
    <label
      class="flex flex-col rounded-md border"
      :class="correction ? 'border-black' : 'border-transparent'"
    >
      <span>Prénom*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: Jean-Louis"
      />
    </label>
    <label
      class="flex flex-col rounded-md border"
      :class="correction ? 'border-black' : 'border-transparent'"
    >
      <span>Entreprise*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md bg-gray-200 p-2"
        placeholder="Ex: JLG Consulting"
      />
    </label>
    <label
      class="flex flex-col rounded-md border"
      :class="correction ? 'border-black' : 'border-transparent'"
    >
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
