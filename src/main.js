import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/home.vue'
import Catalog from './pages/catalog.vue'
import Tovars from './pages/tovars.vue'
import Abouts from './pages/abouts.vue'
import Contact from './pages/contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalog', name: 'Catalog', component: Catalog },
  { path: '/catalog/tovars', name: 'Tovars', component: Tovars },
  { path: '/abouts', name: 'Abouts', component: Abouts },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
