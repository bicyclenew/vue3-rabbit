import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/Login/IndexPage.vue'
import Layout from '@/views/Layout/IndexPage.vue'
import Home from '@/views/Home/IndexPage.vue'
import Category from '@/views/Category/IndexPage.vue'


// 定义路由配置
const routes = [
  {
    // 根路径，使用Layout组件
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'category',
        component: Category
      },
    ]
  },
  {
    // 登录路径，使用Login组件
    path: '/login',
    component: Login
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用HTML5 History模式
  routes, // 使用上面定义的路由配置
})

export default router
