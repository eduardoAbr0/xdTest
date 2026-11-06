<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { redesIntegradas } from '../data/siteData.js'
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Siguenos" titulo="Redes Sociales" centrado />
      <div class="redes-contenedor animado d-flex flex-wrap justify-content-center gap-4">
        <iframe
          v-for="red in redesIntegradas"
          :key="red.titulo"
          :src="red.src"
          :title="red.titulo"
          :allow="red.permitir"
          width="400"
          height="480"
          loading="lazy"
          allowfullscreen
          class="redes-embed"
        ></iframe>
      </div>
    </div>
  </section>
</template>
