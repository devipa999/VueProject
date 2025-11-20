<script setup lang="ts">
import { defineProps } from 'vue'
// import { string } from 'vite-plugin-vue-devtools'
defineProps({
  name: String,
  text: String,
})
</script>

<template>
  <div class="block">
    <p class="name">{{ name }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.name {
  font-size: 38px;
  hyphens: auto;
  text-align: center;
}
.text {
  hyphens: auto;
  font-size: 24px;


}
.block {
  padding: 20px 25px;
  border-radius: 15px;
  background-color: var(--cards);
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--text);
  gap: 1em;
}
.block:hover {
  box-shadow: 0 0 20px 5px var(--shadow);
  color: var(--shadow);
  transition-duration: 400ms;
}
@media screen and (width< 1279px) {
  .name {
    font-size: 28px;
  }
  .text {
    font-size: 18px;
  }
}
</style>
