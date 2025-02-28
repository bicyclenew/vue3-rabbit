import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/Login/IndexPage.vue'
import Layout from '@/views/Layout/IndexPage.vue'


const routes = [
  { path: '/', component: Layout },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
