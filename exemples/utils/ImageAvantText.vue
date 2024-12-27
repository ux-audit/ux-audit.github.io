<script setup lang="ts">
import { faTruck } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="inline-flex flex-col items-start gap-8">
    <div class="flex gap-8 rounded-md bg-[--vp-c-gray-1] p-2">
      <div>
        <div>❌</div>
        <div
          class="flex w-28 flex-col rounded-md bg-[--vp-c-neutral-inverse] p-2"
        >
          <div class="flex flex-col gap-2">
            <div class="text-center">Camion de livraison</div>
            <FaIcon :icon="faTruck" class="text-4xl" />
          </div>
        </div>
      </div>
      <div>
        <div>✔</div>
        <div
          class="flex w-28 flex-col rounded-md bg-[--vp-c-neutral-inverse] p-2"
        >
          <div class="flex flex-col gap-2">
            <FaIcon :icon="faTruck" class="text-4xl" />
            <div class="text-center">Camion de livraison</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-8 rounded-md bg-[--vp-c-gray-1] p-2">
      <div>
        <div>❌</div>
        <div class="flex rounded-md bg-[--vp-c-neutral-inverse] p-2">
          <div class="flex items-center gap-2">
            <div class="text-center">Camion de livraison</div>
            <FaIcon :icon="faTruck" class="text-4xl" />
          </div>
        </div>
      </div>
      <div>
        <div>✔</div>
        <div class="flex rounded-md bg-[--vp-c-neutral-inverse] p-2">
          <div class="flex items-center gap-2">
            <FaIcon :icon="faTruck" class="text-4xl" />
            <div class="text-center">Camion de livraison</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
