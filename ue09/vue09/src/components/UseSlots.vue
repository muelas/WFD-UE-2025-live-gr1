<script setup lang="ts">

import InfoCard from "@/components/InfoCard.vue";
import {ref} from "vue";

const msg=ref("Ich bin eine reactive message");
</script>

<template>
  <InfoCard>
    <p>Das ist eine Infocard ohne expliziten Header und Footer!</p>
    <p style="color: blueviolet;">Man kann hier auch styles nutzen.</p>
    <button>Ich bin ein fauler Button - ich mache nix</button>
  </InfoCard>
  <InfoCard>
    <template v-slot:header>
      Ich bin ein Titel
    </template>
    <template #footer>
      Ich bin ein Footer
    </template>
    <template #default>
      Ich bin der Default slot - body content!
    </template>
  </InfoCard>
  <info-card>
    {{msg}}
    <template #header>Titel</template>
  </info-card>
</template>

<style scoped>

</style>