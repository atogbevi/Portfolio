<script setup lang="ts">
import { onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const headerSurface = useHeaderSurface();

onMounted(() => {
  headerSurface.value = 'default';
});
</script>

<template>
  <div class="min-h-screen bg-background px-6 pb-20 pt-12 lg:px-16 lg:pt-16">
    <div class="mx-auto w-full max-w-4xl">
      <p class="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-secondaryText">
        Contact
      </p>

      <h1 class="mb-16 font-['Newsreader'] text-4xl font-light leading-tight text-primaryText md:text-5xl lg:text-6xl">
        Créons quelque chose <span class="italic">ensemble.</span>
      </h1>

      <!-- Email -->
      <a
        href="mailto:hello@alvastudio.com"
        class="group flex items-center justify-between gap-6 border-t border-borderLight py-8 transition-colors hover:bg-stone-50/80"
      >
        <div class="min-w-0 flex-1">
          <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
            Email
          </p>
          <a href="mailto:atogbevi.wk@gmail.com" class="text-2xl font-extralight text-primaryText hover:text-secondaryText md:text-3xl lg:text-4xl">
            atogbevi.wk@gmail.com
          </a>
        </div>
        <Icon
          icon="mdi:arrow-top-right"
          class="size-7 shrink-0 text-primaryText opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      </a>

      <!-- Phone -->
      <div class="flex items-center justify-between gap-6 border-t border-b border-borderLight py-8">
        <div class="min-w-0 flex-1">
          <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
            Téléphone
          </p>
          <a
            href="tel:+22891601237"
            class="block text-2xl font-extralight text-primaryText transition-colors hover:text-secondaryText md:text-3xl lg:text-4xl"
          >
            +228 91 60 12 37
          </a>
        </div>
        <Icon
          icon="mdi:phone-outline"
          class="size-7 shrink-0 text-primaryText opacity-70"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
