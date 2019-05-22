import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ozelsayfa from './views/Ozelsayfa.vue'
import Harcamalar from './views/Harcamalar.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import firebase from 'firebase'
import store from './store'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/harcamalar',
      name: 'harcamalar',
      component: Harcamalar,
      meta: {
        login_required: true
      }
    },
    {
      path: '/ozelsayfa',
      name: 'ozelsayfa',
      component: Ozelsayfa,
      meta: {
        login_required: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
    const login_required = to.matched.some(x => x.meta.login_required)
    const currentUser = firebase.auth().currentUser
    if(currentUser != null){
      if(login_required){
        next()
      }
      else{
        next("./login")
      }
    }
})
export default router
