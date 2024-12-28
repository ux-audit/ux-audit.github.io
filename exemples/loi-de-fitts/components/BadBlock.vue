<script setup lang="ts">
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div
    class="flex items-center justify-between gap-2 rounded-md border border-[--vp-c-neutral] p-2"
  >
    <div>Camion</div>
    <div class="btn btn-neutral cursor-pointer">
      <FaIcon :icon="faEllipsis" />
    </div>
  </div>
</template>
