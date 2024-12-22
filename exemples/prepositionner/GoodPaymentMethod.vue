<script setup lang="ts">
import { ref } from "vue";

type PaymentMethod = "Carte Bancaire" | "Paypal" | "Google Pay";

const paymentMethodList: PaymentMethod[] = [
  "Carte Bancaire",
  "Paypal",
  "Google Pay",
];

const paymentMethod = ref<PaymentMethod>("Carte Bancaire");

const selectPM = (pm: PaymentMethod) => {
  paymentMethod.value = pm;
};
</script>

<template>
  <div class="max-w-96 bg-gray-300 p-2">
    <div class="flex text-xs sm:text-base">
      <template v-for="pm in paymentMethodList">
        <div
          v-if="pm === paymentMethod"
          class="flex cursor-pointer items-center justify-center rounded-t-xl bg-white px-2 py-2 text-center"
        >
          {{ pm }}
        </div>
        <div
          v-else
          class="flex cursor-pointer items-center justify-center rounded-t-xl bg-gray-100 px-2 py-2 text-center text-gray-500"
          @click="selectPM(pm)"
        >
          {{ pm }}
        </div>
      </template>
    </div>
    <div class="flex bg-white p-2 shadow-2xl">
      <form
        v-if="paymentMethod === 'Carte Bancaire'"
        class="flex h-60 grow flex-col justify-between"
      >
        <div class="flex flex-col gap-2">
          <label class="flex flex-col">
            <span>Numéro CB*</span>
            <input type="text" class="rounded-md bg-gray-200 p-2" />
          </label>
          <div class="flex justify-between">
            <label class="flex flex-col">
              <span>Expire le </span>
              <input type="text" class="w-24 rounded-md bg-gray-200 p-2" />
            </label>
            <label class="flex flex-col">
              <span>CVC*</span>
              <input type="text" class="w-24 rounded-md bg-gray-200 p-2" />
            </label>
          </div>
        </div>

        <button class="rounded bg-[--vp-c-brand-1] px-4 py-2 text-white">
          Payer
        </button>
      </form>
      <div v-if="paymentMethod === 'Paypal'" class="h-60">
        Vous avez sélectionné Paypal ! <br />Bientôt disponible... 😁
      </div>
      <div v-if="paymentMethod === 'Google Pay'" class="h-60">
        Vous avez sélectionné Google Pay ! <br />Bientôt disponible... 😁
      </div>
    </div>
  </div>
</template>
