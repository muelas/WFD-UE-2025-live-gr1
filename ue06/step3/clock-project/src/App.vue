<script setup lang="ts">
import {ref} from "vue";
import Anzeige from "@/components/Anzeige.vue";

const now = ref(new Date().toLocaleTimeString());

setInterval(() => {
  now.value = new Date().toLocaleTimeString();
}, 1000);
</script>

<template>
  Uhrzeit: {{ now }}

  <h1>Anzeige Komponente</h1>
  <h2>1</h2>
  <Anzeige></Anzeige>
  <h2>2</h2>
  <Anzeige></Anzeige>
</template>

<style scoped>

</style>
