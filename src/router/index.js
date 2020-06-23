import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../App.vue'
import SvgList from '../views/SvgList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/svg',
    name: 'svg',
    component: SvgList
  }
]

const router = new VueRouter({
  routes
})

export default router
