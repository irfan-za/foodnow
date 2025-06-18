<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/section/NavbarSection.vue'
import Footer from './components/section/FooterSection.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
