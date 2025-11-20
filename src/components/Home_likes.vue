<script setup lang="ts">
import Card_likes from '../components/Card_likes.vue'
import Zagolovok from './Zagolovok.vue'
</script>

<template>
  <div class="container">
    <div><Zagolovok name="Почему МЫ?"></Zagolovok></div>
    <div class="block_content">
      <Card_likes
        name="Мастерский подход"
        text="Наша команда состоит из увлеченных спортсменов и экспертов. Мы поможем с выбором и дадим профессиональный совет."
      ></Card_likes>
      <Card_likes
        name="Качество, проверенное на себе"
        text="Мы тщательно отбираем бренды и товары, которые представлены на наших полках. "
      ></Card_likes>
      <Card_likes
        name="Широкий выбор для любых целей"
        text="Независимо от вашего вида спорта у нас есть все необходимое  — от базового инвентаря до профессионального снаряжения"
      ></Card_likes>
      <Card_likes
        name="Сообщество единомышленников"
        text="«Мастер Спорта» — это точка притяжения для тех, кто ведет активный образ жизни. "
      ></Card_likes>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.block_content {
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 48%);
  gap: 30px;
  justify-content: space-between;
}
@media screen and (width< 1279px) and (width>767px) {
  .container {
    width: 700px;
  }
  .block_content {
    width: 100%;
  }
}

@media screen and (width< 767px) {
  .container {
    width: 400px;
  }
  .block_content {
    width: 100%;
    grid-template-columns: repeat(1, 100%);
  }
}
</style>
