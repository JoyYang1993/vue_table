import Vue from 'vue'
import Router from 'vue-router'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Less from 'less'
import HelloWorld from '@/components/HelloWorld'
import vueTable from '../views/vueTable'

Vue.use(Router)
Vue.use(Elementui)
Vue.use(Less)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vueTable',
      name: 'vueTable',
      component: vueTable
    }
  ]
})
