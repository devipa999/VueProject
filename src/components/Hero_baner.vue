<template>
  <div class="section-hero-baner">
    <div class="container">
      <p class="p1">Мастер Спорта.</p>
      <p class="p2">Ваш результат — наша работа.</p>
    </div>
  </div>
</template>

<style scoped>
.section-hero-baner {
  width: 100%;
  background-color: black;
}
.container {
  width: 1200px;
  background-image: url(/public/HeroBaner.webp);
  background-position: center;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: end;
  color: white;
  font-size: 60px;
  font-weight: 800;

}
.p1 {
  text-align: right;
}
.p2 {
  text-align: right;
  padding-bottom: 5%;
}

@media screen and (width< 1279px) and (width>767px) {
  .container {
    background-image: url(/public\HeroBaner_tb.webp);
    width: 700px;
    height: 378px;
    font-size: 34px;
  }
}

@media screen and (width< 767px) {
  .container {
    background-image: url(/public/HeroBaner_mb.webp);
    width: 400px;
    height: 220px;
    font-size: 20px;
  }
}
</style>
