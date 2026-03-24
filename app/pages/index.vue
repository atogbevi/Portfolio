<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import WebServices from '~/components/WebServices.vue'
import DesignServices from '~/components/DesignServices.vue'
import PhotoServices from '~/components/PhotoServices.vue'

/* ======================
   SERVICES CONFIG
====================== */
const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Création de sites web et d’applications modernes, rapides et sur mesure.',
    icon: 'mdi:code',
    component: WebServices,
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'Nous concevons des identités visuelles et des supports de marque.',
    icon: 'mdi:palette',
    component: DesignServices,
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Nous capturons des instants et créons des histoires visuelles.',
    icon: 'mdi:camera',
    component: PhotoServices,
  },
]

/* ======================
   STATE
====================== */
const activeService = ref<number | null>(null)
const serviceOpen = ref(false)

const headerSurface = useHeaderSurface()

/* ======================
   ACTIONS
====================== */
const openService = (id: number) => {
  activeService.value = id

  // allow component to mount before animation
  requestAnimationFrame(() => {
    serviceOpen.value = true
  })
}

const closeService = () => {
  serviceOpen.value = false

  // wait for closing animation before unmount
  setTimeout(() => {
    activeService.value = null
  }, 700)
}

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
