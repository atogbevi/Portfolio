<script setup lang="ts">
import type { ProjectStep } from '~/data/projects'

defineProps<{
  steps: ProjectStep[]
}>()
</script>

<template>
  <section class="mt-14 max-w-3xl lg:mt-16">
    <h2 class="font-['Newsreader'] text-2xl font-light text-accentInk md:text-3xl">
      Ma démarche
    </h2>

    <ol class="mt-5 flex list-none flex-col">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="grid grid-cols-[2.25rem_1fr] gap-3 border-t border-borderStrong py-5 sm:gap-4"
      >
        <span class="font-['Newsreader'] text-xl font-light tabular-nums text-accentInk">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <div>
          <h3 class="text-xl font-light leading-snug text-primaryText">
            {{ step.title }}
          </h3>
          <p class="mt-2 whitespace-pre-line text-base leading-relaxed text-primaryText">
            {{ step.text }}
          </p>
          <ProjectMedia
            v-if="step.image"
            class="mt-4"
            :src="step.image"
            :alt="step.title"
          />
        </div>
      </li>
    </ol>
  </section>
</template>
