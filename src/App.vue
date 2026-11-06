<script setup>
import BarraGobierno from './components/BarraGobierno.vue'
import { useScrollObserver } from './composables/useScrollObserver.js'

useScrollObserver()
</script>

<template>
  <BarraGobierno />
  <main></main>
</template>
