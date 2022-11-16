import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  ,
  {
    path: '/financa',
    name: 'financa',
   
    component: () => import('../views/Financa.vue')
  },
  {
    path: '/balanco',
    name: 'balanco',
   
    component: () => import('../views/Balanco.vue')
  },
  {
    path: '/entrada',
    name: 'entrada',
   
    component: () => import('../views/Entrada.vue')
  },
  {
    path: '/extrato',
    name: 'extrato',
   
    component: () => import('../views/Extrato.vue')
  },
  {
    path: '/pagamento',
    name: 'pagamento',
   
    component: () => import('../views/Pagamento.vue')
  },
  {
    path: '/retirada',
    name: 'retirada',
   
    component: () => import('../views/Retirada.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
