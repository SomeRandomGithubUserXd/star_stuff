import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
