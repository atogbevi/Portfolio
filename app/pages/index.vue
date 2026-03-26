<script setup lang="ts">
import { computed, watch } from 'vue'

import WebServices from '~/components/WebServices.vue'
import DesignServices from '~/components/DesignServices.vue'
import PhotoServices from '~/components/PhotoServices.vue'

/* ======================
   SERVICES CONFIG
====================== */
const services = [
  {
    id: 1,
    title: 'Développeur Web',
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
    title: 'Photographie',
    description: 'Nous capturons des instants et créons des histoires visuelles.',
    icon: 'mdi:camera',
    cover: '/images/cover3.jpg',
    component: PhotoServices,
  },
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
watch(serviceOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})

function syncHeaderSurface() {
  if (!serviceOpen.value || activeService.value === null) {
    headerSurface.value = 'default'
    return
  }
  if (activeService.value === 1) headerSurface.value = 'web'
  else if (activeService.value === 2) headerSurface.value = 'design'
  else if (activeService.value === 3) headerSurface.value = 'photo'
}

watch([serviceOpen, activeService], syncHeaderSurface, { immediate: true })
</script>

<template>
  <div class="bg-background">

    <!-- HERO -->
    <HeroSection :inactive="serviceOpen" />

    <!-- SERVICES HUB -->
    <ServiceHub
      :services="services"
      :inactive="serviceOpen"
      @open="openService"
    />

    <!-- ACTIVE SERVICE -->
    <component
      v-if="currentServiceComponent"
      :is="currentServiceComponent"
      :active="serviceOpen"
      @close="closeService"
    />

  </div>
</template>
