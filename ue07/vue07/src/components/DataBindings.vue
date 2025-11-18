<script setup lang="ts">
import {ref} from "vue";

// reactive state
const content = ref("Welcome to Vue.js");
const pageTitle = ref("Hello Vue!");
// 1) nav als array von strings
const nav = ref(["Home", "About", "Contact", "New"]);
// 2) besser: nav als array von objekten
const links = ref([
  {text: "Home", url: "index.html"},
  {text: "About", url: "about.html"},
  {text: "Contact", url: "contact.html"}
]);

const isDisabled = ref(false);
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in links">
        <a v-bind:href="item.url">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
  <h2>{{ pageTitle }}</h2>
  <p>{{ content }}</p>
  <!-- v-bind Kurzform -->
  <button :disabled="isDisabled ? true : undefined" v-on:click="isDisabled=!isDisabled">Click to disable</button>
</template>

<style scoped>

</style>