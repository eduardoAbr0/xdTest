<script setup>
import BarraGobierno from './components/BarraGobierno.vue'
import EncabezadoInstitucional from './components/EncabezadoInstitucional.vue'
import NavPrincipal from './components/NavPrincipal.vue'
import BuscadorModal from './components/BuscadorModal.vue'
import HeroSlider from './components/HeroSlider.vue'
import CifrasRapidas from './components/CifrasRapidas.vue'
import { useScrollObserver } from './composables/useScrollObserver.js'
import { ref } from 'vue'

const buscadorAbierto = ref(false)

useScrollObserver()
</script>

<template>
  <BarraGobierno />
  <EncabezadoInstitucional @abrir-buscador="buscadorAbierto = true" />
  <NavPrincipal />
  <BuscadorModal v-model="buscadorAbierto" />
  <main>
    <HeroSlider />
    <CifrasRapidas />
  </main>
</template>
