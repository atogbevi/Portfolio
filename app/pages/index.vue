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
    description: 'We build web applications using the latest technologies.',
    icon: 'mdi:code',
    component: WebServices,
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'We design visual identities and branding materials.',
    icon: 'mdi:palette',
    component: DesignServices,
  },
  {
    id: 3,
    title: 'Photography',
    description: 'We capture moments and create visual stories.',
    icon: 'mdi:camera',
    component: PhotoServices,
  },
]

/* ======================
   STATE
====================== */
const activeService = ref<number | null>(null)
const serviceOpen = ref(false)

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
