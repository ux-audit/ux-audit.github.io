<script setup lang="ts">
import { Field } from "./interfaces/Field";
import VueDatePicker from "@vuepic/vue-datepicker";

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
    <VueDatePicker v-model="model" :enable-time-picker="false">
      <template
        #dp-input="{
          value,
          onInput,
          onEnter,
          onTab,
          onClear,
          onBlur,
          onKeypress,
          onPaste,
          isMenuOpen,
        }"
      >
        <input type="text" class="w-full rounded-md bg-gray-200 p-2" :value />
      </template>
    </VueDatePicker>
  </label>
</template>
