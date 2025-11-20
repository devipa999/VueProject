<script setup>
import Zagolovok from '@/components/Zagolovok.vue'
import Form from '@/components/Form.vue'
import Map from '@/components/Map.vue'
</script>

<template>
  <div class="container">
    <Zagolovok name="Предложите улучшение"></Zagolovok>
    <Form></Form>
    <Zagolovok name="Наше местоположение"></Zagolovok>
    <Map ></Map>
  </div>
</template>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  @media screen and (width< 1279px) and (width>767px) {
    .container {
      width: 700px;
    }


  }

  @media screen and (width< 767px) {
    .container {
      width: 400px;
    }

  }
</style>
