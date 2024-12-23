<script setup lang="ts">
import { onMounted } from "vue";
import { Field } from "./interfaces/Field";
import { initFlowbite } from "flowbite";

const props = defineProps<{
  field: Field;
  visible?: boolean;
}>();

const model = defineModel();

const handleClick = (choice: string) => {
  console.log("click");
  model.value = choice;
};

onMounted(() => {
  initFlowbite();
});
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
    <input type="date" v-model="model" class="rounded-md bg-gray-200 p-2" />
  </label>
</template>
