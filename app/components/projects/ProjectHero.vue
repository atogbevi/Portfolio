<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
  actions: { key: string; href: string; label: string }[]
}>()

const route = useRoute()
const { openService } = useServicePanel()

async function backToProjects() {
  if (route.path !== '/') {
    await navigateTo('/')
  }
  openService(props.project.serviceId)
}
</script>

<template>
  <header class="mx-auto max-w-5xl px-6 pb-4 pt-8 lg:px-10 lg:pt-14">
    <button
      type="button"
      class="inline-flex items-center gap-3 text-sm text-secondaryText transition-colors hover:text-primaryText motion-reduce:transition-none"
      @click="backToProjects"
    >
      <span aria-hidden="true">←</span>
      <span>Retour aux projets</span>
    </button>

    <p class="mt-10 max-w-2xl text-sm leading-relaxed text-secondaryText">
      {{ project.role }}
    </p>

    <h1 class="mt-6 max-w-4xl font-['Newsreader'] text-4xl font-light leading-tight text-primaryText md:text-5xl lg:text-6xl">
      {{ project.title }}
    </h1>

    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-primaryText md:text-xl">
      {{ project.tagline }}
    </p>

    <ul class="mt-8 flex flex-wrap gap-2">
      <li
        v-for="item in project.stack"
        :key="item"
        class="rounded-full border border-borderLight px-3 py-1 text-xs text-secondaryText"
      >
        {{ item }}
      </li>
    </ul>

    <ul v-if="actions.length" class="mt-8 flex flex-wrap gap-3">
      <li v-for="action in actions" :key="action.key">
        <a
          :href="action.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-full border border-borderLight bg-cardBg px-5 py-2 text-sm text-primaryText transition-colors hover:text-secondaryText motion-reduce:transition-none"
        >
          {{ action.label }}
        </a>
      </li>
    </ul>

    <ProjectMedia
      class="mt-16"
      :src="project.cover"
      :alt="project.title"
      eager
    />
  </header>
</template>
