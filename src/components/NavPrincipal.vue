<script setup>
import { ref } from 'vue'
import { menuItems } from '../data/siteData.js'

const menuAbierto = ref(false)
const dropdownAbierto = ref(null)

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value
}

function toggleDropdown(index) {
  if (window.innerWidth <= 768) {
    dropdownAbierto.value = dropdownAbierto.value === index ? null : index
  }
}
</script>

<template>
  <nav class="nav-principal">
    <button class="nav-toggle" :aria-expanded="menuAbierto" @click="toggleMenu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      Menu Principal
    </button>
    <div class="nav-principal__inner" :class="{ abierto: menuAbierto }">

      <div class="nav-item">
        <a href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
      </div>

      <div
        v-for="(item, i) in menuItems"
        :key="item.label"
        class="nav-item"
        :class="{ abierto: dropdownAbierto === i }"
        @click="toggleDropdown(i)"
      >
        <a href="#">{{ item.label }} <span class="nav-item__flecha">&#9660;</span></a>
        <div class="nav-dropdown">
          <a
            v-for="child in item.children"
            :key="child.label"
            :href="child.href"
            :target="child.external ? '_blank' : undefined"
            :rel="child.external ? 'noopener' : undefined"
          >{{ child.label }}</a>
        </div>
      </div>

    </div>
  </nav>
</template>
