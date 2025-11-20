<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  img: String,
  prise: Number,
  name: String,
})
</script>

<template>
  <div class="block">
    <div class="img"><img :src="img" width="280px"></div>
    <div class="name">{{name}}</div>
    <div class="prise">
      <b>{{prise}} ₽</b>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_156_210)">
          <path d="M0.146484 11.9351V1.49189C0.146484 0.671351 0.819719 0 1.64256 0H22.5876C23.4105 0 24.0837 0.671351 24.0837 1.49189V22.3784C24.0837 23.1989 23.4105 23.8703 22.5876 23.8703H1.64256C0.819719 23.8703 0.146484 23.1989 0.146484 22.3784V11.9351Z" stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.63477 11.9352H19.5955" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.1152 4.47571V19.3946" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_156_210">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>


    </div>
  </div>
</template>

<style scoped>
  .block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text);

  }
  .block:hover{
    transform: scale(1.05);
    transition-duration: 600ms;
  }
  .name{
    font-size: 24px;
    padding: 0 10px;

  }
  b{
    font-size: 24px;
  }
  .prise{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    padding-bottom: 10px;
  }
</style>
