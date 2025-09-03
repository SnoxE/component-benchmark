<template>
  <nav
    class="navbar navbar-expand-lg fixed-top transition py-3"
    :class="[scrolled ? 'bg-white bg-opacity-75 shadow' : 'bg-transparent']"
  >
    <div class="container-xl px-4 px-lg-5">
      <router-link to="/" class="navbar-brand text-primary fs-3"> DG Detailing </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <template v-for="(item, index) in menuItems" :key="index">
            <li v-if="!item.children" class="nav-item">
              <router-link
                :to="item.url"
                class="nav-link px-3"
                :class="{ 'btn btn-primary text-white ms-lg-5': item.cta }"
                @click="isOpen = false"
              >
                {{ item.name }}
              </router-link>
            </li>

            <li v-else class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="@/assets/images/icons/person.svg" alt="user" width="24" height="24" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="child in item.children" :key="child.id">
                  <a
                    v-if="child.id === 'logout'"
                    href="#"
                    class="dropdown-item"
                    @click.prevent="onItemClick(child)"
                  >
                    {{ child.name }}
                  </a>
                  <router-link v-else :to="child.url" class="dropdown-item" @click="isOpen = false">
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <div v-if="isOpen" class="modal-backdrop bg-white" @click="isOpen = false"></div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isOpen = ref(false)
const isMobile = ref(false)
const scrolled = ref(false)
const auth = useAuthStore()
const { isLoggedIn } = storeToRefs(auth)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('scroll', handleScroll)
})

const checkMobile = () => {
  isMobile.value = window.innerWidth < 912
}

const loggedOutItems = [
  {
    name: 'O Nas',
    url: '/#about',
  },
  {
    name: 'Oferta',
    url: '/services',
  },
  {
    name: 'Rezerwuj',
    url: '/book',
  },
  {
    name: 'Kontakt',
    url: '/contact',
  },
  {
    name: 'Zaloguj',
    url: '/login',
    cta: true,
  },
]

const loggedInItems = [
  {
    id: 'about',
    name: 'O Nas',
    url: '/#about',
  },
  {
    id: 'oferta',
    name: 'Oferta',
    url: '/services',
  },
  {
    id: 'book',
    name: 'Rezerwuj',
    url: '/book',
  },
  {
    id: 'contact',
    name: 'Kontakt',
    url: '/contact',
  },
  {
    id: 'user',
    url: '/',
    children: [
      { id: 'orders', name: 'Rezerwacje', url: '/user/reservations' },
      { id: 'cars', name: 'Samochody', url: '/user/cars' },
      { id: 'logout', name: 'Wyloguj', url: '/', logout: true, cta: true },
    ],
  },
]

const mobileLoggedInItems = [
  {
    id: 'about',
    name: 'O Nas',
    url: '/#about',
  },
  {
    id: 'oferta',
    name: 'Oferta',
    url: '/services',
  },
  {
    id: 'book',
    name: 'Rezerwuj',
    url: '/book',
  },
  {
    id: 'contact',
    name: 'Kontakt',
    url: '/contact',
  },
  { id: 'orders', name: 'Rezerwacje', url: '/user/reservations' },
  { id: 'cars', name: 'Samochody', url: '/user/cars' },
  { id: 'logout', name: 'Wyloguj', url: '/', logout: true, cta: true },
]

const menuItems = computed(() => {
  if (!isLoggedIn.value) return loggedOutItems
  return isMobile.value ? mobileLoggedInItems : loggedInItems
})

const onItemClick = async (item) => {
  if (item.id === 'logout') {
    auth.logout()
    isOpen.value = false
  }
  if (item.url) {
    isOpen.value = false
  }
}
</script>

<style scoped>
.transition {
  transition: all 0.3s ease-in-out;
}

.navbar {
  z-index: 1030;
  background-color: transparent;
}

.navbar-brand {
  color: #ff6d01 !important;
}

.modal-backdrop {
  z-index: 1020;
}

.btn-primary {
  background-color: #ff6d01 !important;
  border-color: #ff6d01 !important;
}

.navbar-brand {
  font-weight: 600;
}

.nav-link {
  font-weight: 500;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

@media (min-width: 992px) {
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
  }
}
</style>
