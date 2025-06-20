<template>
  <header class="navbar" :class="{ 'navbar--scrolled': !isTransparent }">
    <div class="navbar__container">
      <a class="navbar__logo" href="/">
        <img :src="logo" alt="Foodnow Logo" />
      </a>

      <!-- Mobile toggle button -->
      <button
        class="navbar__mobile-toggle"
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile overlay for navigation and auth -->
      <div class="navbar__mobile-overlay" :class="{ 'is-active': isMenuOpen }">
        <nav class="navbar__nav" :class="{ 'navbar__nav--mobile': isMenuOpen }">
          <RouterLink
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            :class="['navbar__link', { 'navbar__link--active': isActiveRoute(route.path) }]"
            @click="closeMenu"
          >
            {{ route.name }}
          </RouterLink>
        </nav>

        <div class="navbar__auth" :class="{ 'navbar__auth--mobile': isMenuOpen }">
          <a href="login" class="navbar__login">Login</a>
          <a href="register" class="navbar__register">Register</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import logo from '@/assets/images/logo.svg'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const routes = [
  { path: '/', name: 'Home' },
  { path: '/order', name: 'Order' },
  { path: '/about', name: 'About' },
  { path: '/blog', name: 'Blog' },
  { path: '/contact', name: 'Contact us' },
]

const isActiveRoute = (path: string): boolean => {
  return route.path === path
}

const isMenuOpen = ref(false)
const isTransparent = ref(true)

// Toggle the mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

// Close the mobile menu
const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Handle scroll event to change navbar transparency
const handleScroll = () => {
  isTransparent.value = window.scrollY < 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style src="@/styles/layout/navbar.scss" lang="scss" scoped></style>
