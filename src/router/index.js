import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("../pages/tableDemo.vue"),
    // redirect: '/'
    children:[]
  },
  {
    path: '/flipClock',
    component: () => import("../pages/flipClock.vue"),
    name: 'flipclock',
    meta: {
        title: '翻页时钟'
    }
},

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  // base: 'miaomiao',
  routes
})

export default router