<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex w-56 flex-col gap-2">
      <div
        class="flex items-center justify-center bg-gray-700 px-4 py-2 text-white"
      >
        Bouton sérieux
      </div>
      <div
        class="flex items-center justify-center rounded bg-indigo-700 px-4 py-2 text-white"
      >
        Bouton professionnel
      </div>
      <div
        class="flex items-center justify-center rounded-xl bg-blue-400 px-4 py-2 text-white"
      >
        Bouton enfantin
      </div>
      <div
        class="flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-white"
      >
        Miam miam... une chips !
      </div>
    </div>
    <div class="flex">
      <div
        class="gallet-1 -mx-2 flex h-40 w-40 items-center justify-center bg-blue-700 p-8 text-white mix-blend-multiply"
      >
        Un petit caillou...
      </div>
      <div
        class="gallet-2 -mx-2 flex h-40 w-40 items-center justify-center rounded bg-yellow-500 p-8 text-white mix-blend-multiply"
      >
        ...un deuxième...
      </div>
      <div
        class="gallet-3 -mx-2 flex h-40 w-40 items-center justify-center rounded-xl bg-red-400 p-8 text-white mix-blend-multiply"
      >
        ...Et plouf !
      </div>
    </div>
  </div>
</template>

<style>
.gallet-1 {
  border-radius: 30% 70% 60% 40% / 29% 50% 50% 71%;
}
.gallet-2 {
  border-radius: 66% 34% 75% 25% / 46% 70% 30% 54%;
}
.gallet-3 {
  border-radius: 34% 66% 30% 70% / 72% 70% 30% 28%;
}
</style>
