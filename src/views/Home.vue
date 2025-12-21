<script setup>

</script>

<template>
  <main class="min-h-screen flex items-center">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
        Olá, eu sou
        <span class="text-emerald-400">Matheus Fajardo</span>
      </h1>

      <h2 class="text-neutral-300 text-2xl md:text-3xl mb-8">
        Desenvolvedor Full Stack
      </h2>

      <p class="text-neutral-400 text-lg max-w-2xl mb-10 leading-relaxed">
        Especializado em desenvolvimento web moderno, com ferramentas como Vue.js, Laravel, SQL e N8N para automatização.
      </p>

      <div class="flex flex-wrap gap-4">
        <RouterLink to="/projetos" class="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-lg font-medium transition">
          Ver Projetos
        </RouterLink>
        <RouterLink to="/contato" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-6 py-3 rounded-lg font-medium transition">
          Contato
        </RouterLink>
      </div>
      
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-emerald-400 text-xl font-semibold mb-2">Engenheiro de Software (em andamento)</h3>
          <p class="text-neutral-400">Sexto período</p>
        </div>
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-emerald-400 text-xl font-semibold mb-2">3+ Anos na área de TI</h3>
          <p class="text-neutral-400">Experiência profissional</p>
        </div>
        <div class="bg-neutral-700/30 p-6 rounded-xl">
          <h3 class="text-emerald-400 text-xl font-semibold mb-2">Full Stack</h3>
          <p class="text-neutral-400">Frontend, APIs e Banco de dados (SQL e NoSQL)</p>
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