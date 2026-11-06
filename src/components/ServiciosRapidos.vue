<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { servicios } from '../data/siteData.js'
import { iconos } from '../data/icons.js'
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Acceso Rapido" titulo="Servicios y Plataformas" />
      <div class="row g-3">
        <div v-for="servicio in servicios" :key="servicio.nombre" class="col-12 col-sm-6 col-lg-4">
          <a :href="servicio.href" target="_blank" rel="noopener" class="servicio animado h-100">
            <div class="servicio__icono">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="iconos[servicio.icono]"></svg>
            </div>
            <span class="servicio__nombre">{{ servicio.nombre }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
