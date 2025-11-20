<script setup>
import {ref, provide } from 'vue'
import Logo from './Logo.vue'
import Switch from './Switch.vue'
import Burger from './Burger.vue'

const Modal = ref(false)

provide('key', Modal)

const click = () => {
  Modal.value = !Modal.value
}
</script>

<template>
  <Burger v-if="Modal" :Modal="Modal.value"></Burger>
  <header>
    <div class="Container">
      <div class="header_content">
        <router-link to="/"><Logo></Logo></router-link>
        <router-link to="/catalog" class="headerCatalog">
          <svg
            class="svg_burger"
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="16"
              y2="1"
              stroke="var(--blue)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="7"
              x2="16"
              y2="7"
              stroke="var(--blue)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="13"
              x2="16"
              y2="13"
              stroke="var(--blue)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <span>Каталог</span>
        </router-link>
        <div class="header_input">
          <input class="input" type="text" />
          <svg
            class="svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1874 14.2059L18.5 18.5M16.3746 8.9375C16.3746 4.82989 13.0448 1.5 8.93731 1.5C4.8298 1.5 1.5 4.82989 1.5 8.9375C1.5 13.0451 4.8298 16.375 8.93731 16.375C13.0448 16.375 16.3746 13.0451 16.3746 8.9375Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="header_icons">
        <Switch></Switch>
        <svg
          width="38"
          height="34"
          viewBox="0 0 38 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2274 32.5C15.106 32.5 15.8183 31.8391 15.8183 31.0238C15.8183 30.2086 15.106 29.5476 14.2274 29.5476C13.3487 29.5476 12.6365 30.2086 12.6365 31.0238C12.6365 31.8391 13.3487 32.5 14.2274 32.5Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.7276 32.5C32.6063 32.5 33.3185 31.8391 33.3185 31.0238C33.3185 30.2086 32.6063 29.5476 31.7276 29.5476C30.849 29.5476 30.1367 30.2086 30.1367 31.0238C30.1367 31.8391 30.849 32.5 31.7276 32.5Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 1.5H7.86364L12.1273 21.2662C12.2728 21.9458 12.6712 22.5563 13.2529 22.9908C13.8346 23.4253 14.5625 23.6561 15.3091 23.6429H30.7727C31.5193 23.6561 32.2472 23.4253 32.8289 22.9908C33.4106 22.5563 33.8091 21.9458 33.9545 21.2662L36.5 8.88095H16.0833"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <button @click="click" class="Burger">
        <svg
          class="svg_burger"
          width="25"
          height="18"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="18"
            y2="1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="1"
            y1="7"
            x2="18"
            y2="7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="1"
            y1="13"
            x2="18"
            y2="13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
<style scoped>
.svg {
  position: absolute;
  /* padding-left: 80%; */
  /* padding-left: -1em; */
  /* padding-top: 4%; */
  margin-left: 94%;
  margin-top: 1.5%;
}

.svg_burger {
  /* background-color: white; */
  /* position: absolute; */
}
header {
  background: var(--blue);

  color: white;
}
.Burger{
  background: none;
  border: none;
}

span {
  font-weight: 500;
}
.header_logo {
  min-width: 258px;
}
.header_input {
  position: relative;
  height: 35px;
  display: flex;
  width: 100%;
}
.input {
  height: 35px;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white;
  border-radius: 10px;
  width: 100%;
  font-size: 28px;
  color: white;
}
.Container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 15px 0px;
  justify-content: space-between;
}
.headerCatalog {
  background-color: white;
  color: var(--blue);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 7px;
  width: 95px;
}
.header_content {
  display: flex;
  align-items: center;
  width: 80%;
  gap: 30px;
}
.header_icons {
  display: flex;
  width: 10%;
  justify-content: space-between;
  align-items: center;
}
.Burger {
  display: none;
}

@media screen and (width< 1279px) and (width>767px) {
  .Container {
    width: 700px;
  }
  .header_logo {
    min-width: 125px;
  }
  .header_icons{
    width: 15%;
  }

  .svg {
    margin-left: 89%;
    margin-top: 3%;
  }
}

@media screen and (width< 767px) {
  .Container {
    width: 400px;
    gap: 10px;
  }
  .header_input {
    display: none;
  }
  .header_content {
    width: 60%;
  }
  .header_icons {
    display: none;
  }
  .Burger {
    display: flex;
    align-items: center;
  }
}
</style>
