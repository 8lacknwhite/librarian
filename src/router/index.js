import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import('../views/Authors.vue')
  },
  {
    path: '/issues',
    name: 'issues',
    component: () => import('../views/Issues.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/Members.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../views/Staff.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
