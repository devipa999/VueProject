<script setup lang="ts">
import Card_otz from './Card_otz.vue'
import Zagolovok from './Zagolovok.vue'
</script>
<template>
  <div class="container">
    <div><Zagolovok name="Отзывы"></Zagolovok></div>
    <div class="Block_cards">
      <Card_otz
        name="Иван иванов"
        :stars="5"
        text='Решил серьезно заняться бегом, но в огромном выборе кроссовок сразу запутался. В других магазинах просто спрашивали размер и цвет. В "Мастере Спорта" все было иначе! Консультант, Алексей, который сам бегает полумарафоны, задал кучу вопросов: по какой поверхности буду бегать, какой у меня вес, были ли травмы. В итоге подобрал мне две модели на примерку, подробно объяснил разницу в технологии амортизации. '
      ></Card_otz>
      <Card_otz
        name="Мария Семенова"
        :stars="1"
        text="Покупала сыну-подростку хоккейную экипировку. Цены неадекватные, а ассортимент просто маленький."
      ></Card_otz>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.Block_cards {
  display: grid;
  grid-template-columns: repeat(2, 49%);
  justify-content: space-between;
}

@media screen and (width< 1279px) and (width>767px) {
  .container {
    width: 700px;
  }
  .Block_cards {
    grid-template-columns: repeat(1, 100%);
    gap: 2em;
  }
}

@media screen and (width< 767px) {
  .container {
    width: 400px;
  }
  .Block_cards {
    grid-template-columns: repeat(1, 100%);
    gap: 2em;
  }
}
</style>
