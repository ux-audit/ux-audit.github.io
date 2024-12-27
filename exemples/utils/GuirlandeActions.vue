<script setup lang="ts">
import {
  faCaretDown,
  faPen,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Article } from "./interfaces/Article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 123 },
  { id: "a2", name: "Pelle", price: 5, qty: 57 },
  { id: "a3", name: "Tondeuse", price: 45, qty: 65 },
  { id: "a4", name: "Marteau", price: 8, qty: 80 },
];
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <nav>
      <button class="btn btn-neutral" title="Rafraîchir">
        <FaIcon :icon="faRotateRight" />
      </button>
    </nav>

    <table class="nicetable">
      <thead>
        <tr>
          <th class="name">Nom</th>
          <th class="name">Prix</th>
          <th class="name">Qté</th>
          <th class="actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in articles" :key="a.id">
          <td class="name">{{ a.name }}</td>
          <td class="name text-right">{{ a.price }} €</td>
          <td class="name text-right">{{ a.qty }}</td>
          <td class="actions flex gap-2">
            <button class="btn btn-neutral" title="Détails">
              <FaIcon :icon="faCaretDown" />
            </button>
            <button class="btn btn-neutral" title="Editer">
              <FaIcon :icon="faPen" />
            </button>
            <button class="btn btn-neutral" title="Supprimer">
              <FaIcon :icon="faTrashAlt" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
