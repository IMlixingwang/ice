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
    path: '/researchrouter',
    name: 'researchrouter',
    component: () => import('src/components/research-center/ResearchRouter.vue'),
    children:[{
      path:'/researchrouter/researchcenter/',
      name: 'researchcenter',
      component:()=>import('src/components/research-center/ResearchCenter.vue')
    },
    {
      path:'/researchrouter/lessonlist/:category',
      name: 'lessonlist',
      component:()=>import('src/components/research-center/LessonList.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('src/components/about/About.vue')
  },
  {
    path: '/vipserve',
    name: 'vipserve',
    component: () => import('src/components/vip-service/VipLogin.vue')
  },
  {
    path: '/admin',
    name: 'adminPage',
    component: () => import('src/components/vip-service/admin/AdminPage.vue')
  },
  {
    path: '/brandjoin',
    name: 'brandjoin',
    component: () => import('src/components/brand-join/Brandjoin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router