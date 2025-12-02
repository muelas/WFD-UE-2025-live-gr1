<script setup lang="ts">
import {computed, type Ref, ref} from "vue";

// filter mit computed properties
const list = ref([
  {name: "Andreas", age: 40},
  {name: "Katrin", age: 39},
  {name: "Felix", age: 7},
  {name: "Max", age: 5},
]);
const filter = ref(0);

const filteredList = computed(() => {
  return list.value.filter((item) => item.age >= filter.value);
});

// writeable computed property
const first: Ref<string | undefined> = ref("Felix");
const last: Ref<string | undefined> = ref("Müller");
const full = computed({
  get: (): string => {
    return `${first.value} ${last.value}`;
  },
  set: (neu: string): void => {
    const parts = neu.split(" ");
    // individual assignments
    first.value = parts[0];
    last.value = parts[1];
    // destructuring assignment
    [first.value, last.value] = parts;
  }
});
</script>

<template>
  <h2>Filter mit Computed Properties</h2>
  <label for="filter_input">Filter: </label>
  <input type="number" id="filter_input" v-model="filter">
  <ul>
    <li v-for="item in filteredList" :key="item.name">{{ item.name }}, {{ item.age }}</li>
  </ul>
  <h2>Writeable Computed Properties</h2>
  <label for="name_input">Name: </label>
  <input type="text" id="name_input" v-model.lazy="full">
  <p>Ergebnis im State:</p>
  <ul>
    <li>Vorname: {{ first }}</li>
    <li>Nachname: {{ last }}</li>
  </ul>
</template>

<style scoped>

</style>