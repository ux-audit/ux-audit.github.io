<template>
  <div class="flex bg-gray-200 p-4">
    <form class="table grow border-spacing-2 rounded bg-white p-4 shadow-lg">
      <label class="table-row">
        <span class="table-cell"> Nom de famille* </span>
        <div class="table-cell">
          <input type="text" class="w-full rounded bg-gray-100 p-2" />
          <div class="h-6"></div>
        </div>
      </label>
      <label class="table-row">
        <span class="table-cell"> Prénom* </span>
        <div class="table-cell">
          <input type="text" class="w-full rounded bg-gray-100 p-2" />
          <div class="h-6"></div>
        </div>
      </label>
      <label class="table-row">
        <span class="table-cell"> Numéro de compte de sécurité sociale* </span>
        <div class="table-cell">
          <input type="text" class="w-full rounded bg-gray-100 p-2" />
          <div class="h-6"></div>
        </div>
      </label>
      <div class="table-row">
        <div class="table-cell"></div>
        <div class="table-cell">
          <button class="w-full rounded bg-gray-800 px-4 py-2 text-white">
            Suivant >
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
