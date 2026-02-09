<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  services: Array,
  inactive: Boolean,
})

defineEmits(['open'])
</script>

<template>
  <section
    class="w-full py-8 px-6 lg:py-12 lg:px-16 transition-all duration-700
           ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="inactive
      ? 'scale-95 opacity-0 pointer-events-none'
      : 'scale-100 opacity-100'"
  >
    <div class="flex flex-col gap-10 lg:flex-row">
      <div
        v-for="service in services"
        :key="service.id"
        @click="$emit('open', service.id)"
        class="border border-accentMedium/20 bg-cardBg rounded-xl p-4 lg:flex-1
               cursor-pointer transition-all duration-500
               hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex justify-between">
          <Icon :icon="service.icon" class="text-secondaryText size-6" />
          <p class="text-secondaryText text-sm">0{{ service.id }}</p>
        </div>

        <div class="h-56" />

        <div>
          <h3 class="text-primaryText text-2xl">
            {{ service.title }}
          </h3>
          <p class="text-secondaryText text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
