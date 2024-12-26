<script setup lang="ts">
import { ref } from "vue";
import { Vehicule } from "./interfaces/Vehicule";
import { faCar, faTruck } from "@fortawesome/free-solid-svg-icons";

const vehicules: Vehicule[] = [
  { marque: "Renault", id: "FH-345-DE", type: "utilitaire", annee: 2021 },
  { marque: "DS", id: "GX-634-XY", type: "voiture", annee: 2020 },
  { marque: "Peugeot", id: "AD-486-GJ", type: "voiture", annee: 2022 },
  { marque: "BMW", id: "DE-945-ME", type: "voiture", annee: 2024 },
  { marque: "Mercedes", id: "FW-580-FX", type: "voiture", annee: 2020 },
  { marque: "Audi", id: "GA-921-QT", type: "voiture", annee: 2022 },
  { marque: "Tesla", id: "ED-426-TU", type: "voiture", annee: 2023 },
  { marque: "Citroen", id: "DE-123-CF", type: "utilitaire", annee: 2019 },
  { marque: "Fiat", id: "DR-895-UV", type: "voiture", annee: 2018 },
  { marque: "Seat", id: "DY-043-VG", type: "voiture", annee: 2021 },
  { marque: "Alpha Romeo", id: "DJ-954-HY", type: "voiture", annee: 2020 },
  { marque: "Porsche", id: "CF-378-NO", type: "voiture", annee: 2020 },
];

const correctSimilarite = ref(false);
</script>

<template>
  <div class="max-w-96">
    <label
      class="flex items-center justify-between rounded-t-lg border border-black p-2"
    >
      <span class="shrink-1 grow">
        {{
          correctSimilarite
            ? "Vous les voyez mieux maintenant ?"
            : "Retrouver plus facilement les utilitaires"
        }}
      </span>
      <input
        type="checkbox"
        class="toggle shrink-0"
        v-model="correctSimilarite"
      />
    </label>
    <div class="flex flex-wrap justify-center gap-2 bg-gray-500 p-2">
      <div v-for="v in vehicules" class="w-28 rounded-lg bg-white p-2">
        <div v-if="!correctSimilarite">{{ v.type }}</div>
        <div v-else class="flex items-center gap-2">
          <FaIcon
            :icon="v.type === 'utilitaire' ? faTruck : faCar"
            :class="v.type === 'utilitaire' && 'text-green-500'"
          />
          <span class="text-sm text-gray-500">{{ v.type }}</span>
        </div>
        <div class="font-bold">{{ v.id }}</div>
        <div class="whitespace-nowrap text-gray-400">{{ v.marque }}</div>
        <div>{{ v.annee }}</div>
      </div>
    </div>
  </div>
</template>
