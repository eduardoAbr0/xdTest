<script setup>
import SeccionHeader from './SeccionHeader.vue'
import { noticiaDestacada, noticiasSecundarias } from '../data/siteData.js'
import { iconos } from '../data/icons.js'
</script>

<template>
  <section class="seccion">
    <div class="seccion__inner">
      <SeccionHeader etiqueta="Comunicacion" titulo="Noticias y Avisos" />
      <div class="noticias-grid">
        <a :href="noticiaDestacada.href" target="_blank" class="noticia-destacada animado">
          <div class="noticia-destacada__img">
            <div class="noticia-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="iconos[noticiaDestacada.icono]"></svg>
            </div>
          </div>
          <div class="noticia-destacada__body">
            <div class="noticia-destacada__tag">{{ noticiaDestacada.tag }}</div>
            <h3 class="noticia-destacada__titulo">{{ noticiaDestacada.titulo }}</h3>
            <p class="noticia-destacada__texto">{{ noticiaDestacada.texto }}</p>
            <div class="noticia-destacada__fecha">{{ noticiaDestacada.fecha }}</div>
          </div>
        </a>
        <a
          v-for="noticia in noticiasSecundarias"
          :key="noticia.titulo"
          :href="noticia.href"
          class="noticia-mini animado"
        >
          <div class="noticia-mini__img">
            <div class="mini-placeholder" :class="`mini-placeholder--${noticia.variante}`">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--azul)" stroke-width="1.5" v-html="iconos[noticia.icono]"></svg>
            </div>
          </div>
          <div>
            <div class="noticia-mini__tag">{{ noticia.tag }}</div>
            <div class="noticia-mini__titulo">{{ noticia.titulo }}</div>
            <div class="noticia-mini__fecha">{{ noticia.fecha }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
