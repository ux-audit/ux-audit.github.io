<script setup lang="ts">
import { Field } from "./interfaces/Field";

const props = defineProps<{
  field: Field;
  visible?: boolean;
}>();

const model = defineModel();

const handleClick = (choice: string) => {
  console.log("click");
  model.value = choice;
};
</script>

<template>
  <label
    v-if="props.field.type === 'text'"
    class="flex flex-col transition-all"
    :class="visible ? 'scale-y-100' : 'scale-y-0'"
  >
    <span class="">{{ props.field.label }}</span>
    <input
      type="text"
      class="flex rounded-md bg-gray-200 p-2"
      v-model="model"
    />
  </label>
  <label
    v-if="props.field.type === 'select'"
    class="flex flex-col gap-2 transition-all"
    :class="visible ? 'scale-y-100' : 'scale-y-0'"
  >
    <span class="">{{ props.field.label }}</span>
    <div class="flex gap-2">
      <button
        type="button"
        class="btn btn-select"
        v-for="choice in props.field.choices"
        :key="choice"
        @click="handleClick(choice)"
      >
        {{ choice }}
      </button>
    </div>
  </label>
  <label
    v-if="props.field.type === 'date'"
    class="flex flex-col gap-2 transition-all"
    :class="visible ? 'scale-y-100' : 'scale-y-0'"
  >
    <span class="">{{ props.field.label }}</span>
    <input type="date" v-model="model" class="rounded-md bg-gray-200 p-2" />
  </label>
  <span>Model: {{ model }}</span>
</template>
