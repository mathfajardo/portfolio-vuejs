<template>
  <main class="min-h-screen py-12">
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
          Contato
        </h1>
        <p class="text-neutral-400 text-lg max-w-3xl">
          Entre em contato para projetos, colaborações ou conversas técnicas.
        </p>
      </div>

      <div class="mb-16">
        <div class="bg-neutral-700/30 rounded-xl p-8 max-w-2xl">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-green-300/20 rounded-lg flex items-center justify-center mr-4">
              <i class="bi bi-envelope text-white"></i>
            </div>
            <h2 class="text-white text-2xl font-bold">Email</h2>
          </div>
          
          <div class="flex items-center space-x-4">
            <a 
              href="mailto:seu.email@exemplo.com" 
              class="text-xl text-green-300 hover:text-emerald-300 transition"
            >
              mathfajardo.contato@hotmail.com
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-2xl">
        <h2 class="text-white text-2xl font-bold mb-6">Redes Sociais</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- GitHub -->
          <a 
            href="https://github.com/mathfajardo" 
            target="_blank"
            class="bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl p-6 transition flex items-center"
          >
            <div class="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mr-4">
              <i class="bi bi-github text-white"></i>
            </div>
            <div>
              <h3 class="text-white font-semibold">GitHub</h3>
              <p class="text-neutral-400 text-sm">Projetos e código</p>
            </div>
          </a>

          <!-- LinkedIn -->
          <a 
            href="https://linkedin.com/in/matheus-fajardo-3214492b9" 
            target="_blank"
            class="bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl p-6 transition flex items-center"
          >
            <div class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
              <i class="bi bi-linkedin text-white"></i>
            </div>
            <div>
              <h3 class="text-white font-semibold">Linkedin</h3>
              <p class="text-neutral-400 text-sm">Perfil profissional</p>
            </div>
          </a>

          <!-- YouTube -->
          <a 
            href="https://youtube.com/@Fajatech" 
            target="_blank"
            class="bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl p-6 transition flex items-center"
          >
            <div class="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mr-4">
              <i class="bi bi-youtube text-white"></i>
            </div>
            <div>
              <h3 class="text-white font-semibold">YouTube</h3>
              <p class="text-neutral-400 text-sm">Tutoriais e conteúdo</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
