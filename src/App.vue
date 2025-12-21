<script setup>

import './assets/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Cabecalho from './components/Cabecalho.vue';

</script>

<template>
  <Cabecalho></Cabecalho>
  <div class="bg-neutral-800 min-h-screen">
    <div class="container mx-auto">
    <RouterView></RouterView>
  </div>
  </div>
  
</template>

<style scoped></style>
