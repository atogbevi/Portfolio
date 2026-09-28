<script setup lang="ts">
import type { ProjectGalleryItem } from '~/data/projects'

defineProps<{
  images: ProjectGalleryItem[]
}>()
</script>

<template>
  <section class="mt-28 lg:mt-36">
    <h2 class="max-w-3xl font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
      Galerie
    </h2>

    <ul class="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
      <li v-for="image in images" :key="image.src">
        <figure>
          <ProjectMedia :src="image.src" :alt="image.caption" />
          <figcaption class="mt-4 text-sm leading-relaxed text-secondaryText">
            {{ image.caption }}
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>
