<script setup>
defineProps({
  etiqueta: { type: String, required: true },
  titulo: { type: String, required: true },
  centrado: { type: Boolean, default: false }
})
</script>

<template>
  <div class="seccion__header animado" :class="{ 'seccion__header--centrado': centrado }">
    <div class="seccion__etiqueta">{{ etiqueta }}</div>
    <h2 class="seccion__titulo">{{ titulo }}</h2>
    <div class="seccion__linea"></div>
  </div>
</template>
