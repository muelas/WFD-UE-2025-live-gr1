<template>
  <q-page class="column items-center justify-evenly">

    <h1>Buttons</h1>
    <q-btn label="Drück mich"></q-btn>
    <q-btn label="Drück mich" round></q-btn>
    <q-btn label="Drück mich" rounded></q-btn>
    <q-btn label="Drück mich" flat></q-btn>
    <q-btn label="Drück mich" disabled></q-btn>
    <q-btn label="Drück mich" color="secondary"></q-btn>

    <h1>Lists</h1>
    <q-list bordered>
      <q-item clickable>
        Item 1
      </q-item>
      <q-item>
        Item 2
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon name="person"></q-icon>
        </q-item-section>
        <q-item-section>
          Max
          <q-item-label caption>Name</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
</script>
