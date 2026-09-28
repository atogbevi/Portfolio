<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const surface = useHeaderSurface();

const isDark = computed(() => surface.value === 'web' || surface.value === 'data')

const barClass = computed(() => {
  if (isDark.value) {
    return 'border-white/10 bg-stone-950 text-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)]'
  }
  if (surface.value === 'design') {
    return 'border-stone-300/80 bg-white text-primaryText shadow-[0_10px_40px_-16px_rgba(24,24,27,0.18)]'
  }
  return 'border-black/[0.06] bg-white text-primaryText shadow-[0_10px_40px_-16px_rgba(24,24,27,0.18)]'
})

const contactButtonClass = computed(() =>
  isDark.value
    ? 'bg-white text-stone-950 hover:bg-stone-200'
    : 'bg-stone-950 text-white hover:bg-stone-800',
)
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-0 lg:w-4/5 lg:mx-auto">
    <nav
      class="pointer-events-auto flex items-center justify-between gap-4 rounded-full border py-2 pl-2.5 pr-2.5 transition-colors duration-300 ease-out sm:pl-3 sm:pr-3"
      :class="barClass">
      <NuxtLink to="/" class="group flex items-center rounded-full" aria-label="Alva Studio">
        <img src="/images/logo.png" alt="" class="size-9 shrink-0 rounded-full object-cover" />
        <span
          class="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-500 ease-out group-hover:max-w-40 group-hover:pl-2.5 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pl-2.5 group-focus-visible:opacity-100">
          alva.studio
        </span>
      </NuxtLink>

      <div class="flex items-center gap-3 sm:gap-4">
        <a href="/cv_fr.pdf" download="CV_FR_ANGELICA_TOGBEVI.pdf"
          class="px-1 text-sm font-medium transition-opacity hover:opacity-70" aria-label="Télécharger le CV (PDF)">
          CV
        </a>
        <NuxtLink to="/contact"
          class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="contactButtonClass">
          Me contacter
          <Icon icon="mdi:arrow-right" class="size-4" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
