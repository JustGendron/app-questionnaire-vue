import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questionnaire from './views/Questionnaire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      //route questionnaire
      path: '/questionnaire',
      name : 'questionnaire',
      component: () => import('./views/Questionnaire.vue')
    },
    {
      //route resultat
      path: '/resultat',
      name : 'resultat',
      component: () => import('./views/Resultat.vue')
    }
  ]
})
