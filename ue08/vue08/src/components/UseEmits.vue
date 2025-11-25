<script setup lang="ts">
import {ref, type Ref} from "vue";
import Emits from "@/components/Emits.vue"
import {Direction} from "@/types";

const simple = ref(false);
const text = ref("");
const dir: Ref<undefined | Direction> = ref(undefined);
const timer = ref(false);

function handleTextEvent(t: string) {
  text.value = t;
}
</script>

<template>
  <h2>Emits</h2>
  <div>Hier wird die Emits-Komponente eingebunden:</div>
  <Emits
      @simpleEvent="simple=true"
      @textEvent="handleTextEvent"
      @mouseAction="(d: Direction) => dir=d"
      @timerEvent="timer=true"
  ></Emits>

  <h2>Ergebnisse der Events</h2>
  <ul>
    <li><b>Simple?</b> <span v-if="simple">Wurde angeklickt!</span></li>
    <li><b>TextEvent: </b> {{ text }}</li>
    <li><b>Direction: </b> {{ dir === undefined ? "?" : dir }}</li>
    <li><b>Timer?</b> <span v-if="timer">Timer ist abgelaufen!</span></li>
  </ul>
</template>

<style scoped>

</style>