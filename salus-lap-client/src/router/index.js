import { createRouter, createWebHistory } from 'vue-router'
import authView from '../views/auth/index.vue'
import dashboardView from '../views/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: authView
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: dashboardView,
      beforeEnter(to, from) {
        
        // block navigation
        return true
      }
    }
  ]
})

export default router
