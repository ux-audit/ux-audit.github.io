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

const handleInput = ($event: Event) => {
  if ($event.target !== null) {
    if ($event.target instanceof HTMLInputElement) {
      console.log("update input", typeof $event.target.value);
      model.value = $event.target.value;
    }
  }
};
</script>

<template>
  <label
    v-if="props.field.type === 'select'"
    class="flex flex-col gap-2 transition-all"
    :class="visible ? 'scale-y-100' : 'scale-y-0'"
  >
    <span class="">{{ props.field.label }}</span>
    <div class="flex flex-wrap gap-2">
      <div
        class="btn btn-select"
        v-for="choice in props.field.choices"
        :key="choice"
        @click="handleClick(choice)"
        :class="model === choice && 'btn-selected'"
      >
        {{ choice }}
      </div>
    </div>
  </label>
  <label
    v-if="props.field.type === 'date'"
    class="flex flex-col gap-2 transition-all"
    :class="visible ? 'scale-y-100' : 'scale-y-0'"
  >
    <span class="">{{ props.field.label }}</span>
    <input
      type="date"
      :value="model"
      @input="handleInput($event)"
      class="rounded-md bg-gray-200 p-2"
    />
  </label>
</template>
