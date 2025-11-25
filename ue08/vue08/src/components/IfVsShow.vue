<script setup lang="ts">
import {ref, reactive} from "vue";

const refObj = ref({name: "Felix", age: 7});
const reactiveObj = reactive({name: "Max", age: 5});

refObj.value.name = "Flix";
reactiveObj.name = "Maxi";
</script>

<template>
  <div v-if="reactiveObj.age==5">Ich werde mit v-if erzeugt/entfernt.</div>
  <div v-show="reactiveObj.age==5">Ich werde mit v-show angezeigt/versteckt.</div>
  <button @click="reactiveObj.age===5?reactiveObj.age=6:reactiveObj.age=5">Toggle age</button>
</template>

<style scoped>

</style>