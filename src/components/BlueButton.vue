<script setup lang="ts">
import { defineProps } from 'vue'
// import { string } from 'vite-plugin-vue-devtools'
defineProps({
  name: String,
  url: String,
  sumbit: Boolean,
})
</script>

<template>
  <router-link v-if="sumbit === false" :to="url">
    <button class="btn1">{{name}}</button>
  </router-link>
  <button v-else class="btn1" type="submit">{{name}}</button>
</template>

<style scoped>
.btn1{
  width: 460px;
  height: 80px;
  background-color: var(--blue);
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 36px;
}
.btn1:hover {
  background-color: red;
  transition-duration: 600ms;
}
@media screen and (width< 1279px) and (width>767px) {
  .btn1{
    width: 220px;
    height: 50px;
    font-size: 24px;
    border-radius: 13px;


  }
}

@media screen and (width< 767px) {
  .btn1{
    width: 200px;
    font-size: 20px;
    border-radius: 13px;
    height: 50px;

  }

}
</style>
