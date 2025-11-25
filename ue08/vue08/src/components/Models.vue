<script setup lang="ts">
import {onMounted, onUpdated, ref} from 'vue';


const name = ref("Max");  // Initialwert wird in Input übernommen
const check = ref(false);
const sel = ref("kid");

onMounted(() => {
  console.log("Models.vue mounted!");
});

onUpdated(() => {
  console.log("Models.vue updated!");
});
</script>

<template>
  <div>Name: <input type="text" v-model="name"> ==> {{ name }}</div>
  <div>Check? <input type="checkbox" v-model="check"> ==> {{ check }}</div>
  <div>Type: <select v-model="sel">
    <option value="adult">Adult</option>
    <option value="kid">Kid</option>
  </select> ==> {{ sel }}
  </div>
</template>

<style scoped>

</style>