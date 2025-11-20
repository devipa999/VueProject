<script setup>
import Kategor_card from '../components/Kategor_card.vue'
import Zagolovok from '@/components/Zagolovok.vue'
  const cat = [
    'Женщинам', 'Мужчинам', 'Детям', 'Обувь', 'Одежда', 'Аксессуары', 'Тренажеры', 'Спортивные добавки'
  ]
</script>

<template>
  <div class="container">
    <div><Zagolovok name="Каталог"></Zagolovok></div>
    <div class="cards_block">
      <Kategor_card v-for="n in 8"
        :text="cat[n-1]"
        :img="'Catalog'+n+'.png'"
      ></Kategor_card>
    </div>
  </div>
</template>

<style scoped>
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .cards_block{
    display: grid;
    grid-template-columns: repeat(4, 25%);
    row-gap: 2em;
  }
  @media screen and (width< 1279px) and (width>767px) {
    .container {
      width: 700px;
    }
    .cards_block{
      grid-template-columns: repeat(2, 40%);
      justify-content: space-between;
      padding: 0 3em;
    }

  }

  @media screen and (width< 767px) {
    .container {
      width: 400px;

    }
    .cards_block{
      grid-template-columns: repeat(1, 50%);
      justify-content: space-between;
      padding: 0 3em;
    }

  }
</style>
