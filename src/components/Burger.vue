<script setup lang="ts">
import Switch from "./Switch.vue"
import {inject} from 'vue'


const value = inject('key')
console.log(value.value)

const click = () =>{
  value.value = false
}

</script>

<template>
  <div class="modal_okno">
    <div @click="click" class="block"></div>
    <div class="content">
      <div class="content_flex">
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
      <button @click="click" class="svg">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.75 20.75H12.75M12.75 20.75L19.75 27.75M12.75 20.75L19.75 13.75M20.75 40.75C31.796 40.75 40.75 31.796 40.75 20.75C40.75 9.704 31.796 0.75 20.75 0.75C9.704 0.75 0.75 9.704 0.75 20.75C0.75 31.796 9.704 40.75 20.75 40.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


      </button>

    </div>
  </div>

</template>

<style scoped>
  .modal_okno{
    width: 100%;
    height: 100em;
    position: absolute;
  }
  button{
    width: 40px;
    height: 40px;
    background: none;
    border: none;

  }
  .content{
    position: fixed;
    right: 0;
    width: 40%;
    background-color: var(--blue);
    height: 100%;
    padding: 5%;
    display: flex;
    justify-content: space-between;
  }
  .block{
    width: 50%;
    height: 257rem;


  }
  .content_flex{
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .modal_okno{
    display: flex;
  }



</style>
