import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import IndexWrap from '@/components/IndexWrap.vue'
import SearchPage from '@/components/SearchPage'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'IndexWrap',
    component: IndexWrap
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
