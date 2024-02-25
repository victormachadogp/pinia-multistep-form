import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/feedback-rate',
      name: 'feedback-rate',
      component: () => import('../views/FeedbackRate.vue')
    },
    {
      path: '/review-details',
      name: 'review-details',
      component: () => import('../views/ReviewDetails.vue')
    }
  ]
})

export default router
