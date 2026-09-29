<script setup>
import { Icon } from '@iconify/vue'

const config = useRuntimeConfig()

defineProps({
  services: Array,
  inactive: Boolean,
})

defineEmits(['open'])

function coverSrc(path) {
  const base = config.app.baseURL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${String(path || '').replace(/^\/+/, '')}`
}
</script>

<template>
  <section id="services"
    class="w-full px-6 py-8 transition-all duration-[var(--panel-duration)] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none lg:px-16 lg:py-28"
    :class="inactive
      ? 'pointer-events-none scale-95 opacity-0'
      : 'scale-100 opacity-100'">
    <div class="flex flex-col items-stretch gap-10 lg:flex-row lg:items-stretch">
      <div v-for="service in services" :key="service.id" class="flex flex-col lg:flex-1">
        <button type="button"
          class="flex w-full flex-1 flex-col rounded-radius border border-borderStrong bg-cardBg text-left transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-surfaceDark"
          :data-service-id="service.id" :aria-label="`Ouvrir ${service.title}`" @click="$emit('open', service.id)">
          <div class="relative">
            <img :src="coverSrc(service.cover)" :alt="service.title"
              class="aspect-[4/3] w-full rounded-t-radius object-cover" />
            <div class="absolute left-0 top-0 flex w-full justify-between p-4">
              <Icon :icon="service.icon" class="size-6 text-inkOnDark" />
              <p class="text-sm text-inkOnDark">0{{ service.id }}</p>
            </div>
          </div>

          <div class="p-4">
            <h3 class="text-2xl text-primaryText">
              {{ service.title }}
            </h3>
            <p class="text-base text-primaryText">
              {{ service.description }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
