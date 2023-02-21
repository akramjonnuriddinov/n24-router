import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/pages/ListPage.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/pages/ArticlePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
