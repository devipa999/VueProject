<script setup >
import TovarCard from '../components/Tovar_card.vue'
import Zagolovok from '../components/Zagolovok.vue'
const name = ['Шорты', 'Футболка', 'Кофта', 'Бутсы']

const prise = [999, 1499, 3499, 9999]
const img = ['./public/tovar1.png', './public/tovar2.png', './public/tovar3.png', './public/tovar4.png']
</script>

<template>
  <div class="container">
    <div><Zagolovok name="Мужчинам"></Zagolovok></div>
    <div class="cards_block">
      <tovar-card v-for="n in 4"
        :name="name[n-1]"
        :prise="prise[n-1]"
        :img="img[n-1]"
      ></tovar-card>
      <tovar-card v-for="n in 4"
                  :name="name[n-1]"
                  :prise="prise[n-1]"
                  :img="img[n-1]"
      ></tovar-card>
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
   grid-template-columns: repeat(4, 23%);
   gap: 1em;
   row-gap: 2em;
 }
 @media screen and (width< 1279px) and (width>767px) {
   .container {
     width: 700px;
   }
   .cards_block{
     grid-template-columns: repeat(2, 45%);
     column-gap: 5%;
     padding: 0 2em;
   }

 }

 @media screen and (width< 767px) {
   .container {
     width: 400px;

   }
   .cards_block{
     grid-template-columns: repeat(1, 95%);
     justify-content: space-between;
     padding: 0 3em;
   }

 }
</style>
