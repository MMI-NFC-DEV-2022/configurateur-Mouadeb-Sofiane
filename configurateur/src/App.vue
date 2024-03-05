<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <h1>bonjour de puis app.vue</h1>
  <Header />
    <RouterView />
  <Footer />
</template>
