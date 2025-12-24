<template>
  <main class="min-h-screen py-12">
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
          Projetos
        </h1>
        <p class="text-neutral-400 text-lg max-w-3xl">
          Alguns dos meus projetos
        </p>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-neutral-700/30 rounded-xl overflow-hidden hover:bg-neutral-700/40 transition group">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-green-300 text-xl font-semibold group-hover:text-emerald-300">
                FajaLoja
              </h3>
              <span class="bg-green-300/20 text-green-300 text-xs px-3 py-1 rounded-full">
                Full Stack
              </span>
            </div>
            <p class="text-neutral-400 mb-4">
              Sistema com autenticação, cadastro, controle de produtos e clientes, e PDV integrado.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded">Vue.js</span>
              <span class="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded">Laravel</span>
              <span class="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded">MySQL</span>
            </div>
            <a href="https://fajaloja.fajatech.com.br" target="_blank" 
               class="inline-flex items-center text-green-300 hover:text-emerald-300">
              Ver projeto →
            </a>
          </div>
        </div>

        <div class="bg-neutral-700/30 rounded-xl overflow-hidden hover:bg-neutral-700/40 transition group">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-green-300 text-xl font-semibold group-hover:text-emerald-300">
                Jogo de Futebol
              </h3>
              <span class="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                Games
              </span>
            </div>
            <p class="text-neutral-400 mb-4">
              Projeto desenvolvido com intuito de ser um jogo de pergunta e resposta, com mecanica de dificuldade e tempo.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded">Python</span>
              <span class="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded">Pygame</span>
            </div>
            <a href="https://www.linkedin.com/posts/matheus-fajardo-3214492b9_python-pygame-activity-7332175580089552897-yu4Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExrAokBjHGaK9Xp26o0O7Lhw3jUzrjuvtw" class="inline-flex items-center text-green-300 hover:text-emerald-300">
              Ver projeto →
            </a>
          </div>
        </div>

      </div>
      <div class="mt-16 text-center">
        <p class="text-neutral-400 mb-6">
          Quer ver colaborar em algo?
        </p>
        <RouterLink to="/contato" 
           class="inline-block bg-green-300 hover:bg-emerald-600 text-black px-8 py-3 rounded-lg font-medium transition">
          Entre em contato
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
a, div {
  transition: all 0.3s ease;
}
</style>