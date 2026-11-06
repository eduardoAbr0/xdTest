<script setup>
import { footer } from '../data/siteData.js'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3">
          <h3 class="footer__titulo">Direccion</h3>
          <p>
            <template v-for="(linea, i) in footer.direccion" :key="linea">
              {{ linea }}<br v-if="i < footer.direccion.length - 1">
            </template>
          </p>
          <h3 class="footer__titulo footer__titulo--contacto">Contacto</h3>
          <p>
            Conmutador: <a :href="`tel:${footer.telefono}`">{{ footer.telefonoTexto }}</a><br>
            Email: <a :href="`mailto:${footer.email}`">{{ footer.email }}</a>
          </p>
          <div class="footer__redes">
            <a
              v-for="red in footer.redes"
              :key="red.nombre"
              :href="red.href"
              target="_blank"
              rel="noopener"
              class="footer__red"
              :title="red.nombre"
            >{{ red.texto }}</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h3 class="footer__titulo">Enlaces</h3>
          <ul class="footer__enlaces">
            <li v-for="enlace in footer.enlaces" :key="enlace.label">
              <a
                :href="enlace.href"
                :target="enlace.external ? '_blank' : undefined"
                :rel="enlace.external ? 'noopener' : undefined"
              >{{ enlace.label }}</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <h3 class="footer__titulo">Ubicacion</h3>
          <div class="footer__mapa">
            <iframe
              :src="footer.mapa"
              title="Ubicacion TecNM Campus Jerez"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom d-flex justify-content-between align-items-center flex-wrap gap-3">
      <div class="footer__copy">TecNM Campus Jerez &mdash; Ultima actualizacion: {{ footer.actualizacion }}</div>
      <a :href="footer.privacidad" target="_blank" class="footer__privacidad" rel="noopener">Aviso de Privacidad</a>
    </div>
  </footer>
</template>
