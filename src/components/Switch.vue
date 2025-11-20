<script setup>
import { ref, onMounted, watch } from 'vue'

const isActive = ref(false)
const theme = ref('light')

const applyTheme = (newTheme) => {
  // Устанавливаем data-атрибут
  document.documentElement.setAttribute('data-theme', newTheme)
  // Устанавливаем color-scheme (эмулируем prefers-color-scheme)
  // document.documentElement.style.colorScheme = newTheme
  localStorage.setItem('user-theme', newTheme)
}

watch(theme, (newTheme) => {
  applyTheme(newTheme)
})

onMounted(() => {
  const savedActive = localStorage.getItem('isActiv')
  const savedTheme = localStorage.getItem('user-theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme) {
    theme.value = savedTheme
  }
  if (savedActive === 'true') {
    toggleColorIns()
  }

  applyTheme(theme.value)
})

const toggleColorIns = () => {
  isActive.value = !isActive.value

}

const toggleColor = () => {
  isActive.value = !isActive.value
  localStorage.setItem('isActiv', isActive.value)
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggleColor" class="btn1" :class="{ active: isActive }">
    <div class="ball"></div>
  </button>
</template>

<style scoped>
.btn1 {
  width: 60px;
  height: 30px;
  position: relative;
  background-color: lightgray;
  border-radius: 30px;
  border: 2px solid gray;
}
.ball {
  width: 30%;
  height: 60%;
  background-color: gray;
  border-radius: 50%;
  margin-left: 5px;
  transition-duration: 600ms;
}
button.active {
  background-color: white;
  .ball {
    margin-left: 60%;
    background-color: black;
    transition-duration: 600ms;
  }
}
</style>
