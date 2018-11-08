import Vue from 'vue'
import Router from 'vue-router'
import SegmentForm from '../pages/template'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/template/',
      name: 'template',
      component: SegmentForm
    }
  ]
})
