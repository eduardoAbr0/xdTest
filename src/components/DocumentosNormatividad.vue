<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { documentos } from '../data/siteData.js'
import { iconos } from '../data/icons.js'
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Documentos" titulo="Convocatorias y Normatividad" />
      <div class="row g-3">
        <div v-for="documento in documentos" :key="documento.nombre" class="col-12 col-md-6 col-xl-4">
          <a :href="documento.href" target="_blank" class="convocatoria animado h-100">
            <div class="convocatoria__icono">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="iconos.documento"></svg>
            </div>
            <div>
              <div class="convocatoria__nombre">{{ documento.nombre }}</div>
              <div class="convocatoria__meta">PDF</div>
            </div>
            <div class="convocatoria__flecha">&rarr;</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
