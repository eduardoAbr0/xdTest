<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { encabezado, logosInstitucionales } from '../data/siteData.js'

defineEmits(['abrir-buscador'])

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="encabezado" :class="{ scrolled }">
    <div class="encabezado__inner">
      <div class="encabezado__logos">
        <template v-for="(logo, i) in logosInstitucionales" :key="logo.alt">
          <div v-if="i > 0" class="encabezado__separador"></div>
          <a :href="logo.href" :target="logo.href.startsWith('http') ? '_blank' : undefined" rel="noopener">
            <img :src="logo.img" :alt="logo.alt">
          </a>
        </template>
      </div>
      <div class="encabezado__titulo">
        {{ encabezado.titulo }}
        <span>{{ encabezado.subtitulo }}</span>
      </div>
      <div class="encabezado__acciones">
        <a :href="encabezado.correo" target="_blank" class="btn-accion btn-accion--correo" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
          <span class="correo-label">Correo</span>
        </a>
        <button class="btn-accion btn-accion--buscar" @click="$emit('abrir-buscador')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>
