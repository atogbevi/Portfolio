<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, watch } from 'vue'

import WebServices from '~/components/WebServices.vue'
import DataServices from '~/components/DataServices.vue'
import DesignServices from '~/components/DesignServices.vue'
import PhotoServices from '~/components/PhotoServices.vue'

/* ======================
   SERVICES CONFIG
====================== */
const services = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Création de sites web et d’applications modernes, rapides et sur mesure.',
    icon: 'mdi:code',
    cover: '/images/cover1.jpg',
    component: WebServices,
  },
  {
    id: 2,
    title: 'Design Graphique',
    description: 'Nous concevons des identités visuelles et des supports de marque.',
    icon: 'mdi:palette',
    cover: '/images/cover2.jpg',
    component: DesignServices,
  },
  {
    id: 3,
    title: 'Data Analyse',
    description: 'Analyse de données et aide à la décision.',
    icon: 'mdi:chart-box',
    cover: '/images/cover4.jpg',
    component: DataServices,
  },
  // Service de photographie désactivé pour le moment
  // {
  //   id: 4,
  //   title: 'Photographie',
  //   description: 'Nous capturons des instants et créons des histoires visuelles.',
  //   icon: 'mdi:camera',
  //   cover: '/images/cover3.jpg',
  //   component: PhotoServices,
  // },
]

/* ======================
   STATE
====================== */
const { activeService, serviceOpen, openService, closeService } = useServicePanel()

const headerSurface = useHeaderSurface()

/* ======================
   COMPUTED
====================== */
const currentServiceComponent = computed(() => {
  const service = services.find(s => s.id === activeService.value)
  return service?.component || null
})

/* ======================
   SIDE EFFECTS
====================== */
watch(serviceOpen, async (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) return
  await nextTick()
  const dialog = document.querySelector<HTMLElement>('[role="dialog"]')
  const close = dialog?.querySelector<HTMLElement>('[data-panel-close]')
  ;(close ?? dialog)?.focus()
})

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !serviceOpen.value) return
  if (event.defaultPrevented || document.querySelector('dialog[open]')) return
  event.preventDefault()
  closeService()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

function syncHeaderSurface() {
  if (!serviceOpen.value || activeService.value === null) {
    headerSurface.value = 'default'
    return
  }
  if (activeService.value === 1) headerSurface.value = 'web'
  else if (activeService.value === 2) headerSurface.value = 'design'
  else if (activeService.value === 3) headerSurface.value = 'data'
  else if (activeService.value === 4) headerSurface.value = 'photo'
}

watch([serviceOpen, activeService], syncHeaderSurface, { immediate: true })
</script>

<template>
  <div class="bg-background">

    <div :inert="serviceOpen ? true : undefined">
      <HeroSection :inactive="serviceOpen" />
      <ServiceHub
        :services="services"
        :inactive="serviceOpen"
        @open="openService"
      />
    </div>

    <!-- ACTIVE SERVICE -->
    <component
      v-if="currentServiceComponent"
      :is="currentServiceComponent"
      :active="serviceOpen"
      @close="closeService"
    />

  </div>
</template>
