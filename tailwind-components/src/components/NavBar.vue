<template>
  <div
    class="fixed w-full left-0 top-0 z-15"
    :class="[
      'transition-colors duration-700',
      scrolled ? 'bg-white/80 shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="flex px-8 xl:px-0 max-w-screen-xl mx-auto py-8 justify-between">
      <router-link to="/" class="self-center text-primary-orange text-heading text-2xl">
        DG Detailing
      </router-link>
      <nav class="flex space-around">
        <ul class="hidden nav:flex nav:gap-8 nav:items-center">
          <li v-for="(item, index) in menuItems" :key="index" class="relative group">
            <router-link
              v-if="!item.children"
              :to="item.url"
              class="text-sm"
              :class="
                item.cta ? 'ml-20 bg-primary-orange rounded-md py-2 px-4 text-background' : ''
              "
            >
              {{ item.name }}
            </router-link>
            <button
              v-else
              type="button"
              class="flex items-center gap-1 cursor-pointer"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <!-- Person icon -->
              <img src="@/assets/images/icons/person.svg" alt="user" />
            </button>
            <ul
              v-if="item.children"
              class="opacity-0 group-hover:opacity-100 transition absolute top-full right-0 mt-2 min-w-[12rem] bg-white shadow-lg rounded-md py-2 z-30"
              role="menu"
            >
              <li v-for="child in item.children" :key="child.id">
                <button
                  v-if="child.id === 'logout'"
                  @click="onItemClick(child)"
                  class="w-full text-left text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  {{ child.name }}
                </button>
                <router-link
                  v-else
                  :to="child.url"
                  class="block text-sm px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  {{ child.name }}
                </router-link>
              </li>
            </ul>
            <!-- <button v-if="item.logout" @click="onLogout" class="text-sm cursor-pointer">
              {{ item.name }}
            </button> -->
            <!-- <router-link v-else :to="item.link" class="text-sm">{{ item.name }}</router-link> -->
          </li>
        </ul>
        <button @click="isOpen = !isOpen" class="block nav:hidden cursor-pointer">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-black z-19 transition-opacity duration-300 ease-in-out"
    :class="isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click="isOpen = false"
  ></div>
  <div
    class="fixed top-0 right-0 w-[95%] sm:w-3/4 h-full z-20 bg-background transform transition-transform duration-300 ease-in-out nav:hidden"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="bg-primary-orange p-4 flex justify-between items-center">
      <h4 class="text-background">Menu</h4>
      <button @click="isOpen = !isOpen" class="bg-title text-white rounded-md cursor-pointer">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <ul class="flex flex-col items-start">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="border-b-1 border-light-gray-text w-full py-2 px-4"
      >
        <router-link
          v-if="item.id === 'logout'"
          @click="onItemClick(item)"
          :to="item.url"
          class="text-sm"
          >{{ item.name }}</router-link
        >
        <router-link v-else :to="item.url" class="text-sm">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
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
  isMobile.value = window.innerWidth < 912 // e.g. below `lg:` breakpoint
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
