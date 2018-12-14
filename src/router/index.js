import Vue from 'vue'
import Router from 'vue-router'
import template from '../pages/template'
import bingo from '../pages/bingo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/template/',
      name: 'template',
      component: template
    },
    {
      path: '/bingo/',
      name: 'bingo',
      component: bingo
    }
  ]
})
