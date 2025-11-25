<script setup lang="ts">
import {ref} from "vue";

const family = ref(["Andreas", "Katrin", "Felix", "Max"]);

const myObj = ref({
  name: "Felix",
  age: 7,
  sex: "male",
})
</script>

<template>
  <!-- v-for für Zahlenliste -->
  <span v-for="n in 10">Zahl={{ n }} </span>

  <!-- v-for mit key -->
  <ul>
    <li v-for="name in family" :key="name">{{ name }}</li>
  </ul>

  <!-- v-for mit template -->
  <ul>
    <template v-for="name in family" :key="name">
      <li>{{ name }}</li>
      <li>{{ name }}</li>
    </template>
  </ul>

  <!-- v-for mit Objekt -->
  <ul>
    <li v-for="(value, key, index) in myObj">{{index}}: {{key}}={{ value}}</li>
  </ul>

</template>

<style scoped>

</style>