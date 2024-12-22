<template>
  <div class="flex w-96 bg-gray-200 p-4">
    <form class="flex grow flex-col gap-2 rounded bg-white p-4 shadow-lg">
      <label class="flex flex-col">
        <span class=""> Nom de famille* </span>
        <input type="text" class="w-full rounded bg-gray-100 p-2" />
        <div class="h-6"></div>
      </label>
      <label class="flex flex-col">
        <span class=""> Prénom* </span>
        <input type="text" class="w-full rounded bg-gray-100 p-2" />
        <div class="h-6"></div>
      </label>
      <label class="flex flex-col">
        <span class=""> Numéro de compte de sécurité sociale* </span>
        <input type="text" class="w-full rounded bg-gray-100 p-2" />
        <div class="h-6"></div>
      </label>

      <button class="mt-16 w-full rounded bg-gray-800 px-4 py-2 text-white">
        Suivant >
      </button>
    </form>
  </div>
</template>
