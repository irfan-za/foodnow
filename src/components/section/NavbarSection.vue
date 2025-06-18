<template>
  <header class="navbar">
    <div class="navbar__container">
      <a class="navbar__logo" href="/">
        <img :src="logo" alt="Foodnow Logo" />
      </a>

      <button
        class="navbar__mobile-toggle"
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

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
import logo from '@/assets/img/logo.svg'
import { ref } from 'vue'

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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style src="@/styles/sections/navbar.scss" lang="scss" scoped></style>
