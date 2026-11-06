<script setup>
import BarraGobierno from './components/BarraGobierno.vue'
import EncabezadoInstitucional from './components/EncabezadoInstitucional.vue'
import { useScrollObserver } from './composables/useScrollObserver.js'

useScrollObserver()
</script>

<template>
  <BarraGobierno />
  <EncabezadoInstitucional />
  <main></main>
</template>
