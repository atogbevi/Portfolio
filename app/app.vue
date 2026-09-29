<script setup lang="ts">
import { PANEL_DURATION_MS } from '~/composables/useServicePanel'

useHead({
  style: [
    {
      innerHTML: `:root{--panel-duration:${PANEL_DURATION_MS}ms}`,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
