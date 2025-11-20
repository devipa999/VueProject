<script setup>
</script>

<template>
  <div class="map">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ea9cd1a04b85c3a0fac5b1a35b8a8fd4de0ddeaf1516a4572de4644604e4731&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
.map{
  text-align: center;
}
@media screen and (width< 767px) {

  iframe{
    width: 400px;
    height: 300px;
  }

}

</style>
