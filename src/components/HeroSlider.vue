<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { heroSlides } from '../data/siteData.js'

const actual = ref(0)
let intervalo = null

function irSlide(n) {
  actual.value = n
}

onMounted(() => {
  intervalo = setInterval(() => {
    actual.value = (actual.value + 1) % heroSlides.length
  }, 6000)
})

onUnmounted(() => clearInterval(intervalo))
</script>

<template>
  <section class="hero">
    <div
      v-for="(slide, i) in heroSlides"
      :key="i"
      class="hero__slide"
      :class="{ activa: actual === i }"
    >
      <div class="hero__bg" :class="`tema-${slide.tema}`"></div>
      <div class="hero__overlay">
        <div class="hero__contenido">
          <div class="hero__etiqueta">{{ slide.etiqueta }}</div>
          <h1 class="hero__titulo">{{ slide.titulo }}</h1>
          <p class="hero__subtitulo">{{ slide.subtitulo }}</p>
          <a :href="slide.href" target="_blank" class="hero__cta">
            {{ slide.cta }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="hero__indicadores">
      <button
        v-for="(_, i) in heroSlides"
        :key="i"
        class="hero__dot"
        :class="{ activa: actual === i }"
        @click="irSlide(i)"
      ></button>
    </div>
  </section>
</template>

