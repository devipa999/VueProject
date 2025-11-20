<script setup>
import { defineProps } from 'vue'
defineProps({
  stars: Number,
  name: String,
  text: String,
})
</script>
<template>
  <div class="block">
    <div class="name_stars">
      <h1 class="name">{{ name }}</h1>
      <div class="stars">
        <svg
          v-for="n in stars"
          class="svg"
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9652 11.3555L1.53442 13.0128L1.33196 13.054C1.02547 13.1354 0.746074 13.2966 0.52229 13.5213C0.298506 13.746 0.138356 14.026 0.0581941 14.3328C-0.0219675 14.6396 -0.0192684 14.9622 0.0660155 15.2676C0.151299 15.573 0.316112 15.8503 0.543624 16.0712L8.82471 24.1319L6.87179 35.5179L6.8485 35.715C6.82974 36.032 6.89556 36.3483 7.03922 36.6315C7.18289 36.9147 7.39923 37.1546 7.6661 37.3267C7.93297 37.4987 8.24078 37.5968 8.55801 37.6108C8.87525 37.6248 9.1905 37.5543 9.4715 37.4064L19.6947 32.0314L29.8947 37.4064L30.0739 37.4888C30.3696 37.6053 30.691 37.641 31.0051 37.5923C31.3192 37.5435 31.6147 37.4121 31.8612 37.2115C32.1078 37.0109 32.2965 36.7484 32.4081 36.4508C32.5197 36.1531 32.5501 35.8312 32.4962 35.5179L30.5415 24.1319L38.8262 16.0694L38.9659 15.9171C39.1655 15.6712 39.2964 15.3768 39.3452 15.0639C39.3941 14.751 39.359 14.4307 39.2438 14.1357C39.1285 13.8407 38.9371 13.5816 38.6891 13.3846C38.441 13.1877 38.1452 13.06 37.8318 13.0146L26.401 11.3555L21.2911 0.999695C21.1433 0.699653 20.9144 0.446993 20.6303 0.270316C20.3463 0.0936385 20.0185 0 19.684 0C19.3495 0 19.0217 0.0936385 18.7377 0.270316C18.4536 0.446993 18.2247 0.699653 18.0769 0.999695L12.9652 11.3555Z"
            fill="#FFFF00"
          />
        </svg>
        <svg
          v-for="n in 5 - stars"
          class="svg"
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9042 30.2152L8.84602 36.0291L10.9584 23.715L2.00006 14.995L14.3626 13.2033L19.8916 2L25.4207 13.2033L37.7832 14.995L28.8249 23.715L30.9373 36.0291L19.9042 30.2152Z"
            stroke="#FFFF00"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.block {
  background-color: #434345;
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 20px;
}
.name {
  font-size: 30px;
}
.name_stars {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stars {
  display: flex;
  gap: 10px;
}
.text {
  font-size: 18px;
}

@media screen and (width< 767px) {
  .name {
    font-size: 26px;
  }
  .text {
    font-size: 16px;
  }

  .svg {
    width: 30px;
    height: 30px;
  }
}
</style>
