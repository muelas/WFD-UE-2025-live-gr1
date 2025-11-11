<script setup lang="ts">
import {ref, type Ref} from "vue";

const view: Ref<boolean | undefined> = ref(false);

setInterval(() => {
  // Variante 1: im Kreis
  if (view.value === true) {
    view.value = false;
  } else if (view.value === false) {
    view.value = undefined;
  } else {
    view.value = true;
  }

  // Variante 2: Zufall
  const r = Math.floor(Math.random() * 3);
  view.value = r === 0 ? true : r === 1 ? false : undefined;
}, 2000);
</script>

<template>
  <div v-if="view === true">
    View ist true :)
  </div>
  <div v-else-if="view === false">
    View ist false :(
  </div>
  <p v-else>
    View ist undefined :-o
  </p>
</template>

<style scoped>

</style>