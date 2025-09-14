import LandingPageView from '@/views/LandingPageView.vue'
import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPageView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/user/cars',
      name: 'cars',
      component: () => import('@/views/CarsView.vue'),
    },
    {
      path: '/user/reservations',
      name: 'reservations',
      component: () => import('@/views/ReservationsView.vue'),
    },
    {
      path: '/user/add-car',
      name: 'add-car',
      component: () => import('@/views/AddCarView.vue'),
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('@/views/BookView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/register', '/', '/services', '/contact']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    return '/login'
  }
})

export default router
