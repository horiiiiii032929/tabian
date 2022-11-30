<template>
  <v-text-field
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-text-field>
</template>

<script setup lang="ts">
const prop = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>
