import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ozelsayfa from './views/Ozelsayfa.vue'
import Login from './views/Login.vue'
import firebase from 'firebase'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
    const login_required = to.matched.some(x => x.meta.login_required)
    const currentUser = firebase.auth().currentUser
    //const currentUser = firebase.auth().currentUser
    if(login_required){
      console.log("durum 1")
      if(currentUser){
        next()
      }
      else{
        console.log("durum 2")
        console.log("Login Sayfasına Yönlendiriliyor")
        next("./login")
      }
    }
    else{
      next()
    }

})
export default router
