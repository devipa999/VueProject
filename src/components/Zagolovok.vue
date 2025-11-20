<script setup lang="ts">
import { defineProps } from 'vue'
// import { string } from 'vite-plugin-vue-devtools'
defineProps({
  name: String,
})
</script>
<template>
  <p class="p">{{ name }}</p>
</template>

<style scoped>
.p {
  font-size: 70px;
  color: var(--zagalovok);
  padding-top: 0.7em;
  padding-bottom: 0.3em;
  font-weight: 800;
}
@media screen and (width< 1279px) and (width>767px) {
  .p {
    font-size: 50px;
  }
}

@media screen and (width< 767px) {
  .p {
    font-size: 28px;
  }
}
</style>
