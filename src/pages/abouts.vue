<script setup>
import Zagolovok from '@/components/Zagolovok.vue'
</script>

<template>
  <div class="container">
    <div><Zagolovok name="О нас"></Zagolovok></div>
    <div class="block_content">
      <p>
        «Мастер Спорта» был основан в 2010 году спортсменами для спортсменов. Мы устали от безликих
        магазинов, где никто не мог дать грамотной консультации, и решили создать место, где о
        спорте знают всё. Наша идея проста: чтобы помочь вам достичь результата, нужно самому
        разбираться в тонкостях. Поэтому наш коллектив — это практикующие тренеры, разрядники и
        просто влюбленные в активный образ жизни люди. С самого начала мы делали ставку на два
        ключевых принципа: экспертные консультации и проверенное качество. Сначала нас находили по
        сарафанному радио, теперь — по адресу и на сайте. Но наша миссия не изменилась: быть вашим
        надежным партнером и помогать становиться Мастером своего дела.
      </p>
      <picture>
        <source media="(width< 1279px)" srcset="..\..\public\aboutsPages_tb.webp">
        <img src="..\..\public\aboutsPages.webp" alt="">
      </picture>
      <img src="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
p {
  color: var(--text);
  font-size: 28px;
  text-align: justify;
}
.block_content {
  display: flex;
  justify-content: space-between;
  gap: 4em;
}
@media screen and (width< 1279px) and (width>767px) {
  .container {
    width: 700px;
  }
  p{
    font-size: 18px;
  }
  .block_content{
    gap: 1em;
  }

}

@media screen and (width< 767px) {
  .container {
    width: 400px;
  }
  p{
    font-size: 18px;
  }
  .block_content{
    display: block;
  }
  picture{
    display: none;
  }
}
</style>
