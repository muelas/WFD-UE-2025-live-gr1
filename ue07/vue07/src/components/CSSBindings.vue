<script setup lang="ts">
import {ref, computed} from "vue";

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

function handleNavClick(newPage: number) {
  // e.preventDefault();
  activePage.value = newPage;
}

// computed property für die aktuelle page
const activePageData = computed(() => {
  return links.value[activePage.value]?.page;
});

// use dark mode?
const darkMode = ref(false);

// dark mode with computed property
const computedDark = computed(() => {
  return {
    dark: darkMode.value,
  }
})
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item,index) in links">
        <a
            :style="{
              'background-color': (activePage==index?'red':'white'),
              'color': (activePage==index?'grey':'blue')}"
            v-bind:href="item.url"
            @click.prevent="handleNavClick(index)"
        >{{ item.text }}</a>
      </li>
    </ul>
  </nav>
  <h2>{{ activePageData?.title }}</h2>
  <p :class="{dark: darkMode}">{{ activePageData?.content }}</p>
  <p :class="computedDark">{{ activePage }}</p>
  <button @click="darkMode=!darkMode">Toggle Dark Mode</button>
</template>

<style scoped>
.dark {
  background-color: black;
  color: white;
}
</style>