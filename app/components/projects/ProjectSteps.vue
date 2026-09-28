<script setup lang="ts">
import type { ProjectStep } from '~/data/projects'

defineProps<{
  steps: ProjectStep[]
}>()
</script>

<template>
  <section class="mt-28 max-w-3xl lg:mt-36">
    <h2 class="font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
      Ma démarche
    </h2>

    <ol class="mt-12 flex list-none flex-col gap-16">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="grid grid-cols-[2.75rem_1fr] gap-4 sm:gap-6"
      >
        <span class="font-['Newsreader'] text-3xl font-light tabular-nums text-accentMedium">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <div>
          <h3 class="text-2xl font-light leading-snug text-primaryText">
            {{ step.title }}
          </h3>
          <p class="mt-4 whitespace-pre-line text-base leading-relaxed text-primaryText">
            {{ step.text }}
          </p>
          <ProjectMedia
            v-if="step.image"
            class="mt-8"
            :src="step.image"
            :alt="step.title"
          />
        </div>
      </li>
    </ol>
  </section>
</template>
