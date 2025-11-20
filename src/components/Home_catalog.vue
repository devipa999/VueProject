<script setup lang="ts">
import KategorCard from './Kategor_card.vue'
import Zagolovok from './Zagolovok.vue'
const categ = ['Женщинам', 'Мужчинам', 'Детям', 'Обувь']
</script>

<template>
  <div class="container">
    <div><Zagolovok name="Каталог"></Zagolovok></div>
    <div class="block">
      <KategorCard
        v-for="n in 4"
        :img="'./public/Catalog' + n + '.png'"
        :text="categ[n - 1]"
      ></KategorCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.block {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 0 auto;
}
@media screen and (width< 1279px) and (width>767px) {
  .container {
    width: 700px;
  }
  .block {
    grid-template-columns: repeat(2, 50%);
    justify-content: space-between;
    gap: 30px;
  }
}

@media screen and (width< 767px) {
  .container {
    width: 400px;
  }
  .block {
    grid-template-columns: repeat(1, 100%);
    justify-content: center;
    align-items: center;
    width: 290px;
    gap: 30px;
  }
}
</style>
