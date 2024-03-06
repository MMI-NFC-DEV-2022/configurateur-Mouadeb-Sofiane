<script setup lang="ts">
    import { ref, defineProps, onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router/auto';

    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

</script>

<template>
  <header class="bg-gray-800 py-4">
    <div class="flex justify-between items-center px-4">
      <div>
        <h1 class="text-white text-lg font-semibold">Mon Site</h1>
      </div>
      <!-- Menu mobile (visible sur les petits écrans) -->
      <div class="md:hidden">
        <!-- Utilisation d'une croix pour fermer le menu -->
        <button @click="toggleMobileMenu" class="text-white focus:outline-none relative">
          <!-- Utilisation d'un bouton hamburger pour ouvrir et fermer le menu -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav :class="{ 'hidden': !isMobileMenuOpen }" class="md:flex md:items-center md:space-x-4">
        <ul class="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
          <li>
            <RouterLink to="/" class="text-white hover:text-gray-300">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/form" class="text-white hover:text-gray-300">Form</RouterLink>
          </li>
          <li>
            <RouterLink to="/formimg" class="text-white hover:text-gray-300">Form Images</RouterLink>
          </li>
          
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>
@media (max-width: 768px) {
  nav.md\:hidden {
    display: none !important;
  }
}
</style>
