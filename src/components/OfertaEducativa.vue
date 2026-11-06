<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { carreras } from '../data/siteData.js'
import { iconos } from '../data/icons.js'
</script>

<template>
  <section class="seccion seccion--gris">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Oferta Educativa" titulo="Programas Academicos" />
      <div class="row g-4">
        <div v-for="carrera in carreras" :key="carrera.nombre" class="col-12 col-md-6 col-lg-4">
          <a :href="carrera.href" class="carrera-card animado h-100">
            <div class="carrera-card__icono" :class="`tema-${carrera.tema}`">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="iconos[carrera.icono]"></svg>
            </div>
            <div class="carrera-card__body">
              <h3 class="carrera-card__nombre">{{ carrera.nombre }}</h3>
              <p class="carrera-card__desc">{{ carrera.descripcion }}</p>
              <span class="carrera-card__link">Conocer mas &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
