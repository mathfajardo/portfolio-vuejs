<script setup>
import { ref } from 'vue';

const index = ref(0);

const imagens = ref([
  'pygame2.png',
  'pygame1.png',
  'fajaloja2.png',
  'fajaloja3.png',
  'fajaloja4.png',
  'fajaloja1.png',
  
]);

function proximo_slide() {
  index.value = (index.value + 1) % imagens.value.length;
}

function slide_anterior() {
  index.value = (index.value - 1 + imagens.value.length) % imagens.value.length;
}
</script>

<template>
  <main class="min-h-screen flex items-center">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
        Olá, eu sou
        <span class="text-green-300">Matheus Fajardo</span>
      </h1>

      <h2 class="text-neutral-300 text-2xl md:text-3xl mb-8">
        Desenvolvedor Full Stack
      </h2>

      <p class="text-neutral-400 text-lg max-w-2xl mb-10 leading-relaxed">
        Experiência profissional com ferramentas como <span class="text-green-600">Vue.js, Laravel, SQL e N8N</span> para automação.
      </p>

      <div class="flex flex-wrap gap-4">
        <RouterLink to="/projetos" class="bg-green-300 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition">
          Ver Projetos
        </RouterLink>
        <RouterLink to="/contato" class="border border-emerald-500 text-green-300 hover:bg-green-300/10 px-6 py-3 rounded-lg font-medium transition">
          Contato
        </RouterLink>
      </div>
      
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-green-300 text-xl font-semibold mb-2">Engenheiro de Software (em andamento)</h3>
          <p class="text-neutral-400">Sexto período</p>
        </div>
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-green-300 text-xl font-semibold mb-2">3+ Anos na área de TI</h3>
          <p class="text-neutral-400">Experiência profissional</p>
        </div>
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-green-300 text-xl font-semibold mb-2">Full Stack</h3>
          <p class="text-neutral-400">Frontend, APIs e Banco de dados (SQL e NoSQL)</p>
        </div>
      </div>
      

      <div class="mt-24">
        <h3 class="text-green-300 text-3xl md:text-4xl font-bold mb-8 text-center">
          Imagens de alguns projetos
        </h3>
        
        <div class="relative max-w-4xl mx-auto">
          <div class="overflow-hidden rounded-2xl">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${index * 100}%)` }"
            >
              <div 
                v-for="(image, i) in imagens" 
                :key="i"
                class="w-full flex-shrink-0"
              >
                <div class="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    :src="'/' + image" 
                    :alt="`Projeto ${i + 1}`"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <button 
            @click="slide_anterior"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ‹
          </button>
          <button 
            @click="proximo_slide"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ›
          </button>

          <div class="flex justify-center gap-2 mt-6">
            <button 
              v-for="(_, i) in imagens" 
              :key="i"
              @click="index = i"
              class="w-2 h-2 rounded-full transition"
              :class="index === i ? 'bg-emerald-400 w-6' : 'bg-neutral-600 hover:bg-neutral-400'"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
a, div {
  transition: all 0.3s ease;
}
</style>