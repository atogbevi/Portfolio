<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectGalleryItem } from '~/data/projects'

const props = defineProps<{
  images: ProjectGalleryItem[]
}>()

const cacheKey = props.images.map(image => image.src).join('|')
const presentSrcs = useState<string[]>(`gallery:${cacheKey}`, () => [])

if (import.meta.server) {
  const { existsSync } = await import('node:fs')
  const { join } = await import('node:path')
  presentSrcs.value = props.images
    .filter(image => existsSync(join(process.cwd(), 'public', image.src.replace(/^\/+/, ''))))
    .map(image => image.src)
}

const visible = computed(() => {
  const present = new Set(presentSrcs.value)
  return props.images.filter(image => present.has(image.src))
})
</script>

<template>
  <section v-if="visible.length" class="mt-14 lg:mt-16">
    <h2 class="font-['Newsreader'] text-2xl font-light text-accentInk md:text-3xl">
      Galerie
    </h2>

    <ul class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <li v-for="image in visible" :key="image.src">
        <figure>
          <ProjectMedia :src="image.src" :alt="image.caption" />
          <figcaption class="mt-4 text-sm leading-relaxed text-primaryText">
            {{ image.caption }}
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>
