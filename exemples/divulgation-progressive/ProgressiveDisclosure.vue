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
  { label: "Date de naissance", type: "date" },
  { label: "Genre", type: "select", choices: ["Masculin", "Féminin", "Autre"] },
]);

const isReset = ref(true);

const currentIndex = computed(() => {
  console.log("computed");
  let index = 0;
  for (const field of fields) {
    if (field.value !== undefined) {
      index++;
    }
    // do not put break here because the computed will not work after twice !
  }
  return index;
});

const reset = () => {
  for (const field of fields) {
    field.value = undefined;
  }
  isReset.value = true;
};

const start = () => {
  isReset.value = false;
};
</script>

<template>
  <div class="min-h-96">
    <button v-if="isReset" class="btn btn-link" @click="start()">
      <span>Démarrer l'expérience</span>
    </button>
    <form v-else class="mb-8 flex w-full max-w-96 flex-col gap-2 p-2">
      <template v-for="(field, index) in fields" :key="field.label">
        <InputField
          :field
          :visible="index <= currentIndex"
          v-model="field.value"
        />
      </template>
      <button
        type="button"
        v-if="currentIndex === 3"
        class="btn btn-link mt-16 self-start"
        @click="reset()"
      >
        <span>Redémarrer l'expérience</span>
      </button>
    </form>
  </div>
</template>
