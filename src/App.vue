<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/NavbarSection.vue'
import Footer from './components/layout/FooterSection.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
