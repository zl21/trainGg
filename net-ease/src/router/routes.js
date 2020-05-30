import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Category from '@/pages/Category'
import Worthy from '@/pages/Worthy'
import Cart from '@/pages/Cart'
import Personal from '@/pages/Personal'

// 注册并export
export default[
  {
    path:'/',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/worthy',
    component:Worthy
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/',
    redirect:'/'
  }
]