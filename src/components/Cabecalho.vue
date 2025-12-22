<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-neutral-800 border-b border-neutral-700">
    <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <div class="text-3xl font-bold text-white">
            Faja<span class="text-emerald-400">Tech</span>
          </div>
        </RouterLink>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          @click="toggleMenu"
          class="inline-flex items-center justify-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">Abrir menu principal</span>
          <svg
            v-if="!isMenuOpen"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-8">
        <RouterLink
          to="/projetos"
          class="text-sm font-medium text-neutral-300 hover:text-emerald-400 transition px-3 py-2 rounded-lg hover:bg-neutral-700/30"
        >
          Projetos
        </RouterLink>
        <RouterLink 
          to="/contato" 
          class="text-sm font-medium text-neutral-300 hover:text-emerald-400 transition px-3 py-2 rounded-lg hover:bg-neutral-700/30"
        >
          Contato
        </RouterLink>
        <RouterLink 
          to="/youtube"
          class="text-sm font-medium text-neutral-300 hover:text-emerald-400 transition px-3 py-2 rounded-lg hover:bg-neutral-700/30"
        >
          Canal no YouTube
        </RouterLink>
      </div>
    </nav>

    <div 
      v-if="isMenuOpen" 
      class="lg:hidden bg-neutral-800 border-t border-neutral-700"
    >
      <div class="px-4 py-3 space-y-1">
        <RouterLink
          to="/projetos"
          class="block rounded-lg px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700/50 transition"
          @click="toggleMenu"
        >
          Projetos
        </RouterLink>
        <RouterLink
          to="/contato"
          class="block rounded-lg px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700/50 transition"
          @click="toggleMenu"
        >
          Contato
        </RouterLink>
        <RouterLink
          to="/youtube"
          class="block rounded-lg px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700/50 transition"
          @click="toggleMenu"
        >
          Canal no YouTube
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
a, button {
  transition: all 0.2s ease;
}

header {
  position: sticky;
  top: 0;
}
</style>