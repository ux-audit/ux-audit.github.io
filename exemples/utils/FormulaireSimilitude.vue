<script setup lang="ts">
import { ref } from "vue";

const correctGap = ref(false);
</script>

<template>
  <form
    class="flex max-w-96 flex-col gap-2 p-4"
    :class="correctGap && 'rounded-md border border-[--vp-c-neutral]'"
  >
    <label class="flex items-center justify-between">
      <span class="shrink-1 grow">
        {{
          correctGap
            ? "✔ Composants distinguables"
            : "❌ Composants trop similaires"
        }}
      </span>
      <input type="checkbox" class="toggle shrink-0" v-model="correctGap" />
    </label>
    <label class="flex flex-col">
      <span>Nom*</span>
      <input
        type="text"
        name="lastname"
        class="rounded-md p-2"
        :class="correctGap && 'bg-[--vp-c-gray-1]'"
        placeholder="Ex: GUENEGO"
      />
    </label>
    <label class="flex flex-col">
      <span>Prénom*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md p-2"
        :class="correctGap && 'bg-[--vp-c-gray-1]'"
        placeholder="Ex: Jean-Louis"
      />
    </label>
    <label class="flex flex-col">
      <span>Entreprise*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md p-2"
        :class="correctGap && 'bg-[--vp-c-gray-1]'"
        placeholder="Ex: JLG Consulting"
      />
    </label>
    <label class="flex flex-col">
      <span>Fonction*</span>
      <input
        type="text"
        name="firstname"
        class="rounded-md p-2"
        :class="correctGap && 'bg-[--vp-c-gray-1]'"
        placeholder="Ex: Consultant UX"
      />
    </label>
    <button
      type="button"
      class="mt-16"
      :class="correctGap && 'btn btn-primary'"
    >
      Valider
    </button>
  </form>
</template>
