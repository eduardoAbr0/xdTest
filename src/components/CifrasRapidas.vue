<script setup>
import { cifras } from '../data/siteData.js'
</script>

<template>
  <section class="cifras">
    <div class="cifras__inner animado row g-0">
      <div v-for="cifra in cifras" :key="cifra.label" class="cifra col-6 col-md-3">
        <div class="cifra__numero">{{ cifra.numero }}</div>
        <div class="cifra__label">{{ cifra.label }}</div>
      </div>
    </div>
  </section>
</template>
