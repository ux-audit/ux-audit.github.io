<script setup lang="ts">
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";

const showOthers = ref(false);

const selectAutre = () => {
  showOthers.value = !showOthers.value;
};
</script>

<template>
  <div class="flex flex-wrap items-start gap-8">
    <div class="flex flex-col rounded-md border p-2 shadow-xl">
      <div>❌</div>
      <div>
        <div>Payer avec</div>
        <div class="flex w-48 flex-col gap-2">
          <button class="btn btn-secondary">Google Pay</button>
          <button class="btn btn-secondary">Apple Pay</button>
          <button class="btn btn-secondary">Paypal</button>
          <button class="btn btn-secondary">Chèque</button>
          <button class="btn btn-secondary">Virement</button>
          <button class="btn btn-secondary">Prélèvement SEPA</button>
          <button class="btn btn-secondary">Samsung Pay</button>
          <button class="btn btn-secondary">Klarna</button>
          <button class="btn btn-secondary">Carte Bleue</button>
        </div>
      </div>
    </div>
    <div class="flex flex-col rounded-md border p-2 shadow-xl">
      <div>✔</div>
      <div>
        <div>Payer avec</div>
        <div class="flex w-48 flex-col gap-2">
          <button class="btn btn-primary">Carte Bleue</button>
          <button class="btn btn-secondary">Paypal</button>
          <button class="btn btn-neutral" @click="selectAutre()">
            <span>Autres... </span>
            <FaIcon :icon="showOthers ? faChevronUp : faChevronDown" />
          </button>
          <template v-if="showOthers">
            <button class="btn btn-secondary">Google Pay</button>
            <button class="btn btn-secondary">Apple Pay</button>
            <button class="btn btn-secondary">Chèque</button>
            <button class="btn btn-secondary">Virement</button>
            <button class="btn btn-secondary">Prélèvement SEPA</button>
            <button class="btn btn-secondary">Samsung Pay</button>
            <button class="btn btn-secondary">Klarna</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
