<script setup lang="ts">
import { Field } from "../utils/interfaces/Field";
import InputField from "../utils/InputField.vue";
import { computed, reactive, ref } from "vue";

const fields = reactive<Field[]>([
  {
    label: "Vous avez la nationalité ",
    type: "select",
    choices: ["Française", "Autre"],
  },
  { label: "Date de naissance", type: "date", value: "" },
  { label: "Genre", type: "select", choices: ["Masculin", "Féminin", "Autre"] },
]);

const currentIndex = computed(() => {
  console.log("computed");
  let index = 0;
  for (const field of fields) {
    if (field.value !== undefined) {
      index++;
    }
    break;
  }
  console.log("index: ", index);
  return index;
});
</script>

<template>
  <form class="flex w-full max-w-96 flex-col gap-2 p-2">
    <template v-for="(field, index) in fields" :key="field.label">
      <InputField
        :field
        :visible="index <= currentIndex"
        v-model="field.value"
      />
      <span>FV : {{ field.value }}</span>
    </template>
  </form>
  {{ fields }}
</template>
