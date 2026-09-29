<script setup lang="ts">
import { computed } from 'vue'
import { publicAsset } from '~/utils/publicAsset'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  eager?: boolean
}>(), {
  eager: false,
})

const available = useState(`project-image:${props.src}`, () => true)

if (import.meta.server) {
  const { existsSync } = await import('node:fs')
  const { join } = await import('node:path')
  const relative = props.src.replace(/^\/+/, '')
  available.value = existsSync(join(process.cwd(), 'public', relative))
}

const resolved = computed(() => publicAsset(props.src))

function markMissing() {
  available.value = false
}
</script>

<template>
  <div class="w-full">
    <img
      v-if="available"
      :src="resolved"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
      class="h-auto w-full rounded-radius border border-borderStrong bg-cardBg object-contain"
      @error="markMissing"
    >
    <div
      v-else
      class="aspect-[4/3] w-full rounded-radius border border-borderStrong bg-cardBg"
      role="img"
      :aria-label="alt"
    />
  </div>
</template>
