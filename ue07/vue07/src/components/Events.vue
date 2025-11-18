<script setup lang="ts">
import {ref} from "vue";

// reactive state
const content = ref("Welcome to Vue.js");
const pageTitle = ref("Hello Vue!");
// wir speichern auch content und title pro Seite
const links = ref([
  {text: "Home", url: "index.html", page: {title: "Home", content: "Content of the Home Page"}},
  {text: "About", url: "about.html", page: {title: "About", content: "Content of the About Page"}},
  {text: "Contact", url: "contact.html", page: {title: "Contact", content: "Content of the Contact Page"}},
]);
// so ist es nicht im reactive state -->keine Aktualisierung in der OBerfläche!
// const activePage = 0;
const activePage = ref(0);

function handleNavClick(e: Event) {
  // e.preventDefault();
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item,index) in links">
        <a
            v-bind:href="item.url"
            @click.prevent="activePage=index"
        >{{ item.text }}</a>
      </li>
    </ul>
  </nav>
  <h2>{{ links[activePage]?.page.title }}</h2>
  <p>{{ links[activePage]?.page.content }}</p>
  <p>{{ activePage}}</p>
</template>

<style scoped>

</style>