<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}
body {
  background-color: var(--base);
}
a {
  text-decoration: none;
  color: white;
}
</style>
