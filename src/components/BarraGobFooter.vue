<script setup>
import { barraGobierno } from '../data/siteData.js'
</script>

<template>
  <div class="barra-gob-footer">
    <a href="https://www.gob.mx/" target="_blank" rel="noopener">
      <img :src="barraGobierno.logo" alt="Gobierno de Mexico">
    </a>
  </div>
</template>
