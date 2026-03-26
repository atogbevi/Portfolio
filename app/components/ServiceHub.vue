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
    id="services"
    class="w-full py-8 px-6 lg:py-28 lg:px-16 transition-all duration-700
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
        class="border border-accentMedium/20 bg-cardBg rounded-xl lg:flex-1
               cursor-pointer transition-all duration-500
               hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="relative">
          <img :src="service.cover" alt="Service Cover" class="w-full h-full object-cover rounded-t-xl" />
          <div class="absolute top-0 left-0 w-full flex justify-between p-4">
            <Icon :icon="service.icon" class="text-accentLight size-6" />
            <p class="text-accentLight text-sm">0{{ service.id }}</p>
          </div>

        </div>

        <!-- <div class="h-56" /> -->

        <div class="p-4">
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
