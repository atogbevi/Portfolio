<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const surface = useHeaderSurface();

const barClass = computed(() => {
  switch (surface.value) {
    case 'web':
    case 'data':
      return 'border-borderOnDark bg-surfaceDark text-inkOnDark'
    case 'design':
    case 'photo':
    case 'default':
    default:
      return 'border-borderStrong bg-background text-primaryText'
  }
})

const cvClass = computed(() => {
  switch (surface.value) {
    case 'web':
    case 'data':
      return 'text-inkOnDark hover:underline'
    case 'design':
    case 'photo':
    case 'default':
    default:
      return 'text-primaryText hover:text-accentInk'
  }
})

const contactButtonClass = computed(() => {
  switch (surface.value) {
    case 'web':
    case 'data':
      return 'bg-accentLightBlue text-surfaceDark hover:bg-accentInk hover:text-inkOnDark'
    case 'design':
    case 'photo':
    case 'default':
    default:
      return 'bg-accentInk text-inkOnDark hover:bg-surfaceDark'
  }
})
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-0 lg:w-4/5 lg:mx-auto">
    <nav
      class="pointer-events-auto flex items-center justify-between gap-4 rounded-full border py-2 pl-2.5 pr-2.5 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:pl-3 sm:pr-3"
      :class="barClass">
      <NuxtLink to="/" class="group flex items-center rounded-full" aria-label="ALVA STUDIO">
        <img src="/images/logo.png" alt="" class="size-9 shrink-0 rounded-full object-cover" />
        <span
          class="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-xs font-medium tracking-[0.14em] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-40 group-hover:pl-2.5 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pl-2.5 group-focus-visible:opacity-100 md:max-w-none md:pl-2.5 md:opacity-100">
          ALVA STUDIO
        </span>
      </NuxtLink>

      <div class="flex items-center gap-3 sm:gap-4">
        <a href="/cv_fr.pdf" download="CV_FR_ANGELICA_TOGBEVI.pdf"
          class="rounded-radius px-1 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="cvClass"
          aria-label="Télécharger le CV (PDF)">
          CV
        </a>
        <NuxtLink to="/contact"
          class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="contactButtonClass">
          Me contacter
          <Icon icon="mdi:arrow-right" class="size-4" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
