<script setup>
import { barraGobierno } from '../data/siteData.js'
</script>

<template>
  <header class="barra-gob">
    <a href="https://www.gob.mx/" target="_blank" rel="noopener">
      <img :src="barraGobierno.logo" alt="Gobierno de Mexico" loading="eager">
    </a>
    <div class="barra-gob__derecha">
      <a
        v-for="enlace in barraGobierno.enlaces"
        :key="enlace.href"
        :href="enlace.href"
        target="_blank"
        rel="noopener"
        class="barra-gob__link"
      >{{ enlace.label }}</a>
    </div>
  </header>
</template>
