<script setup>
import BarraGobierno from './components/BarraGobierno.vue'
import EncabezadoInstitucional from './components/EncabezadoInstitucional.vue'
import NavPrincipal from './components/NavPrincipal.vue'
import { useScrollObserver } from './composables/useScrollObserver.js'

useScrollObserver()
</script>

<template>
  <BarraGobierno />
  <EncabezadoInstitucional />
  <NavPrincipal />
  <main></main>
</template>
