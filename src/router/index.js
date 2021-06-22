import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/first.vue'
import Second from '../views/second.vue'
import Third from '../views/third.vue'
import Fourth from '../views/fourth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/1',
    name: 'first',
    component: First
  },
  {
    path: '/2',
    name: 'second',
    component: Second
  },
  {
    path: '/3',
    name: 'third',
    component: Third
  },
  {
    path: '/4',
    name: 'fourth',
    component: Fourth,
    children:[
      {
        path:'/4-1',
        component: Fourth,
        name: 'fourth',
      },
      {
        path:'/4-2',
        component: Fourth,
        name: 'fourth',
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
