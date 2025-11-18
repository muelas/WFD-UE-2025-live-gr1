<script setup lang="ts">
const props = defineProps<{
  name: string,
  age: number
}>();

// Nicht erlaubt in Kindkomponente
// props.name = 'Felix';
</script>

<template>
  <p>
    <span class="label">Name: </span> {{ props.name }}
    <br>
    <span class="label">Age: </span> {{ props.age }}
  </p>
</template>

<style scoped>
.label {
  font-weight: bold;
}
</style>