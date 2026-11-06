<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { sitiosInteres } from '../data/siteData.js'
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Aliados" titulo="Sitios de Interes" centrado />
      <div class="sitios-grid animado d-flex flex-wrap justify-content-center align-items-center gap-4">
        <a
          v-for="sitio in sitiosInteres"
          :key="sitio.nombre"
          :href="sitio.href"
          target="_blank"
          rel="noopener"
          :title="sitio.nombre"
        >
          <img :src="sitio.img" :alt="sitio.nombre" class="sitio-logo">
        </a>
      </div>
    </div>
  </section>
</template>
