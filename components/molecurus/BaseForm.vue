<template>
  <v-form class="d-flex align-center" @submit.prevent="addChoice">
    <BaseTextField v-model="textInput" />
    <v-btn type="submit" class="ml-4"
      ><slot name="btnName" :label="btnLabel">{{ btnLabel.some }}</slot></v-btn
    >
  </v-form>
</template>

<script setup lang="ts">
const btnLabel = { default: '選択肢を追加', some: '' }

const textInput = ref('')
const emit = defineEmits<{ (e: 'getText', value: string): void }>()

const addChoice = () => {
  emit('getText', textInput.value)
  textInput.value = ''
}
</script>
