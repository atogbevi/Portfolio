<script setup lang="ts">
  import { computed } from 'vue';
  import { Icon } from '@iconify/vue';

  const surface = useHeaderSurface();

  const headerClass = computed(() => {
    switch (surface.value) {
      case 'web':
        return 'bg-stone-900 text-white';
      case 'design':
        return 'bg-stone-200 text-primaryText';
      case 'photo':
      case 'default':
      default:
        return 'bg-background text-primaryText';
    }
  });

  const linkHoverClass = computed(() =>
    surface.value === 'web'
      ? 'hover:text-stone-300'
      : 'hover:text-secondaryText',
  );

  const iconClass = computed(() =>
    surface.value === 'web' ? 'text-white' : 'text-primaryText',
  );
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-colors duration-300 ease-out lg:px-10"
    :class="headerClass"
  >
    <nav>
      <ul class="flex items-center justify-between">
        <li>
          <a href="/" class="font-bold transition-colors" :class="linkHoverClass">
            ALVA STUDIO
          </a>
        </li>
        <li>
          <NuxtLink to="/contact"
            class="group flex items-center gap-2 transition-colors"
            :class="linkHoverClass"
          >
            <span
              class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 group-hover:max-w-[200px] group-hover:opacity-100"
            >
              Entrer en contact
            </span>
            <Icon icon="mdi-light:email" class="size-6 shrink-0" :class="iconClass" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
