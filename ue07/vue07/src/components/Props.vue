<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
import {ref} from "vue";

const name = ref("Katrin");
const alter = ref(39);
</script>

<template>
  <ChildComponent :name="'Max'" :age="5"></ChildComponent>
  <ChildComponent name="Felix" :age="7"></ChildComponent>
  <ChildComponent :name="'F'+'e'+'lix'" :age="7"></ChildComponent>
  <ChildComponent :name="name" :age="alter" @click="alter++"></ChildComponent>
</template>

<style scoped>

</style>