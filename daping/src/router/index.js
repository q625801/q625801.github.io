import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import EchartsMap from '@/components/EchartsMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/EchartsMap',
      name: 'EchartsMap',
      component: EchartsMap,
    },
  ]
})
