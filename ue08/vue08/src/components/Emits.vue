<script setup lang="ts">
import {ref} from "vue";
import {Direction} from "@/types";

const emit = defineEmits<{
  simpleEvent: [],
  textEvent: [t: string],
  mouseAction: [d: Direction],
  timerEvent: [],
}>();

const text = ref("MyText");

setTimeout(() => {
  emit("timerEvent");
}, 5000);
</script>

<template>
  <h3>SimpleEvent - ohne Parameter</h3>
  <button v-on:click="emit('simpleEvent')">Emit SimpleEvent</button>

  <h3>TextEvent - mit 1 Parameter</h3>
  <input v-model="text">
  <button @click="emit('textEvent', text)">Emit TextEvent</button>

  <h3>MouseAction - weitere Events</h3>
  <div class="mouse" @mouseenter="emit('mouseAction',Direction.In)" @mouseleave="emit('mouseAction',Direction.Out)">Komm
    zu mir!
  </div>

</template>

<style scoped>
.mouse {
  display: inline-block;
  background: linear-gradient(135deg, #fff9c4, #ffe082);
  border: 2px solid #ffb300;
  color: #222;
  padding: 1.2rem 1.6rem;
  margin: 1rem 0;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  font-size: 1.1rem;
  font-weight: 600;
  transition: transform 200ms ease, box-shadow 200ms ease;
  cursor: pointer;
  max-width: 360px;
  text-align: center;
}

.mouse:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.16);
}

.mouse:active {
  transform: translateY(0) scale(0.995);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}
</style>