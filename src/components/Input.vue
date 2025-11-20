<script setup>
import { defineProps } from 'vue'
defineProps({
  type: String,
  placeholder: String,
  textaria: Boolean,
})
</script>

<template>

  <input v-if="textaria === false" :type="type" :placeholder="placeholder">
  <textarea v-else :placeholder="placeholder" ></textarea>
</template>

<style scoped>
input, textarea {
  background-color: #D9D9D9;
  padding: 20px 15px;
  font-size: 26px;
  border: none;
  border-radius: 20px;


}

input, textarea::placeholder {
  font-size: 28px;

}
@media screen and (width< 1279px) and (width>767px) {
  input, textarea {
    font-size: 18px;
  }
  input, textarea::placeholder {
    font-size: 20px;

  }


}

@media screen and (width< 767px) {
  input, textarea {
    font-size: 12px;
  }
  input, textarea::placeholder {
    font-size: 14px;

  }

}
</style>
