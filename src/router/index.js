import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('src/components/home/Home.vue')
  },
  {
    path: '/teachcenter',
    name: 'teachcenter',
    component: () => import('src/components/research-center/ResearchCenter.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('src/components/about/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router