<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)

watch(() => props.modelValue, async (val) => {
  if (val) {
    await nextTick()
    inputRef.value?.focus()
  }
})

function cerrar() {
  emit('update:modelValue', false)
}

function onKeydown(e) {
  if (e.key === 'Escape') cerrar()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div class="buscador-modal" :class="{ abierto: modelValue }" @click.self="cerrar">
      <button class="buscador-modal__cerrar" @click="cerrar">&times;</button>
      <div class="buscador-modal__inner">
        <form action="Buscar" method="POST">
          <input
            ref="inputRef"
            type="text"
            name="buscar"
            placeholder="Buscar en TecNM Jerez..."
            autocomplete="off"
          >
          <input type="hidden" name="btn_busqueda">
        </form>
      </div>
    </div>
  </Teleport>
</template>
