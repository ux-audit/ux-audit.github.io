<script setup lang="ts">
import {
  faPen,
  faPlus,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import { Article } from "./interfaces/Article";

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
  <div class="flex max-w-96 flex-col gap-2">
    <nav class="flex gap-1">
      <button class="btn btn-neutral" title="Rafraîchir">
        <FaIcon :icon="faRotateRight" />
      </button>
      <button
        class="btn btn-neutral"
        title="Supprimer"
        v-if="selectedIds.size > 0"
      >
        <FaIcon :icon="faTrashAlt" />
      </button>
      <button
        class="btn btn-neutral"
        title="Editer"
        v-if="selectedIds.size === 1"
      >
        <FaIcon :icon="faPen" />
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
          <td class="name text-right">{{ a.price }} €</td>
          <td class="name text-right">{{ a.qty }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
