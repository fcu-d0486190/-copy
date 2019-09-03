import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Introduction from './views/Introduction.vue'
import Prediction from './views/Prediction.vue'
import Userprofile from './views/Userprofile.vue'
import Models from './views/Models.vue'
import Datase from './views/Dataset.vue'
import Createmodel from './views/Createmodel.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prediction',
      name: 'prediction',
      component: Prediction
    },
    {
      path: '/models',
      name: 'models',
      component: Models
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin, 
      children:[
        {
          path: 'userprofile',
          name: 'userprofile',
          component: Userprofile
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: Introduction
        },
        {
          path: 'prediction',
          name: 'prediction',
          component: Prediction
        },
        {
          path: 'models',
          name: 'models',
          component: Models
        },
        {
          path: 'dataset',
          name: 'dataset',
          component: Datase
        },
        {
          path: 'createmodel',
          name: 'createmodel',
          component: Createmodel
        }
      ]
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
