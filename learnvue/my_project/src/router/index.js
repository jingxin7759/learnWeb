import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '@/App.vue'

Vue.use(VueRouter)


// 解决路由冗余问题
const originalPush=VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
