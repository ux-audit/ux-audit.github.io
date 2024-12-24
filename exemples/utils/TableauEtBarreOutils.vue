<script setup lang="ts">
import { Ref, ref, watchEffect } from "vue";
import { Article } from "./interfaces/Article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 123 },
  { id: "a2", name: "Pelle", price: 5, qty: 57 },
  { id: "a3", name: "Tondeuse", price: 45, qty: 65 },
  { id: "a4", name: "Marteau", price: 8, qty: 80 },
];
</script>

<template>
  <div>
    <nav class="flex">
      <button class="btn">Rafraichir</button>
      <button class="btn">Ajouter</button>
      <button class="btn">Editer</button>
      <button class="btn">Supprimer</button>
    </nav>
    <table>
      <thead>
        <tr>
          <th class="name">Nom</th>
          <th class="name">Prix</th>
          <th class="name">Quantité</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in articles" :key="a.id">
          <td class="name">{{ a.name }}</td>
          <td class="name">{{ a.price }}</td>
          <td class="name">{{ a.qty }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
