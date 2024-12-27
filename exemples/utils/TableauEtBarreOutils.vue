<script setup lang="ts">
import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import { Article } from "./interfaces/Article";

const correctCLS = ref(false);
const selectedIds = ref<Set<string>>(new Set());

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 123 },
  { id: "a2", name: "Pelle", price: 5, qty: 57 },
  { id: "a3", name: "Tondeuse", price: 45, qty: 65 },
  { id: "a4", name: "Marteau", price: 8, qty: 80 },
];

const select = (id: string) => {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id);
    return;
  }
  selectedIds.value.add(id);
};
</script>

<template>
  <form
    class="flex max-w-96 flex-col gap-2 rounded-md border border-[--vp-c-neutral] p-4"
  >
    <label class="flex h-8 items-center justify-between">
      <span class="shrink-1 grow">
        {{ correctCLS ? "✔ Plus de CLS" : "❌ CLS boutons centrés" }}</span
      >
      <input type="checkbox" class="toggle shrink-0" v-model="correctCLS" />
    </label>

    <div class="flex max-w-96 flex-col gap-2">
      <nav
        class="flex gap-1"
        :class="correctCLS ? 'justify-start' : 'justify-center'"
      >
        <button class="btn btn-neutral" title="Rafraîchir">
          <FaIcon :icon="faRotateRight" />
        </button>
        <button class="btn btn-neutral" title="Ajouter">
          <FaIcon :icon="faPlus" />
        </button>

        <button
          class="btn btn-neutral"
          title="Supprimer"
          v-if="selectedIds.size > 0"
        >
          <FaIcon :icon="faTrashAlt" />
        </button>
      </nav>
      <table class="nicetable">
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="name">Prix</th>
            <th class="name">Qté</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articles"
            :key="a.id"
            @click="select(a.id)"
            class="selectable"
            :class="selectedIds.has(a.id) && 'selected'"
          >
            <td class="name">{{ a.name }}</td>
            <td class="name text-right">{{ a.price }}</td>
            <td class="name text-right">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>
