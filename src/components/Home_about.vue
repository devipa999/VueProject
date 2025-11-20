<script setup lang="ts">
import BlueButton from './BlueButton.vue'
import Zagolovok from './Zagolovok.vue'
</script>

<template>
 <div class="container">
   <div><Zagolovok name="О нас"></Zagolovok></div>
   <div class="about_content">
     <div class="about_text">
       <p class="p">«Мастер Спорта» был основан в 2010 году спортсменами для спортсменов. Мы устали от безликих магазинов, где никто не мог дать грамотной консультации, и решили создать место, где о спорте знают всё ...</p>
       <div class="buton"><blue-button name="Читать дальше" url="/abouts"></blue-button></div>
     </div>
     <div class="about_image">
       <picture>
         <source media="(width< 767px)" srcset="/public/home_about_mb.png">
         <img src="/public/home_about.png" alt="">
       </picture>

     </div>
   </div>
 </div>
</template>

<style scoped>


.about_content{
  display: flex;
  width: 80%;
  gap: 3em;
  margin: 0 auto;
}
.about_text{
  font-size: 32px;
  color: var(--text);
  width: 700px;
  padding-top: 0.3em;
}

.container{
  width: 1200px;
  margin: 0 auto;
}


.buton{
  padding-top: 1.5em;
}
@media screen and (width< 1279px) and (width>767px) {
  .container {
    width: 700px;
  }
  .about_text{
    font-size: 24px;
    min-width: 300px;
  }
  .about_content{
    width: 100%;
    margin: 0;
  }
}

@media screen and (width< 767px) {
  .container {
    width: 400px;
  }
  .about_content{
    width: 100%;
    margin: 0;
    gap: 5px;
  }
  .about_text{
    font-size: 18px;
    min-width: 200px;
    padding-top: 0;
  }
  .buton{
    text-align: right;
    margin-left: 5.5em;
  }



}


</style>
