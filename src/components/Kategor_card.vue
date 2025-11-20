<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  img: String,
  text: String,
})
</script>

<template>
  <router-link to='/catalog/tovars' class="block_catalog">
    <img :src="img" width="290px" />
    <p class="p">{{ text }}</p>
  </router-link>
</template>

<style scoped>
.p {
  text-align: center;
  color: var(--text);
  font-size: 24px;
  padding-bottom: 5px;
}
.block_catalog {
  width: 290px;
  border-radius: 20px;
}
.block_catalog:hover {
  transform: scale(1.02);
  transition-duration: 600ms;
}
</style>
