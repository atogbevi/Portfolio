<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
  actions: { key: string; href: string; label: string }[]
}>()

const position = computed(() => {
  const index = projects.findIndex(item => item.slug === props.project.slug)
  if (index < 0) return ''
  const current = String(index + 1).padStart(2, '0')
  const total = String(projects.length).padStart(2, '0')
  return `${current} / ${total}`
})

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
  <header class="mx-auto max-w-5xl px-6 pb-2 pt-6 lg:px-10 lg:pt-8">
    <button
      type="button"
      class="inline-flex items-center gap-2 text-sm text-primaryText hover:underline"
      @click="backToProjects"
    >
      <span aria-hidden="true">←</span>
      <span>Retour aux projets</span>
    </button>

    <p v-if="position" class="mt-6 text-xs font-medium tracking-[0.14em] text-accentInk">
      {{ position }}
    </p>

    <h1 class="mt-3 max-w-4xl font-['Newsreader'] text-4xl font-light leading-tight text-primaryText md:text-5xl">
      {{ project.title }}
    </h1>

    <p class="mt-4 max-w-2xl text-base leading-relaxed text-primaryText md:text-lg">
      {{ project.tagline }}
    </p>

    <p class="mt-5 max-w-3xl border-t border-borderStrong pt-4 text-sm leading-relaxed text-primaryText">
      {{ project.role }}
      <span v-if="project.stack.length"> · {{ project.stack.join(' · ') }}</span>
    </p>

    <ul v-if="actions.length" class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
      <li v-for="action in actions" :key="action.key">
        <a
          :href="action.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-accentDarkBlue px-4 py-2 text-sm font-medium text-inkOnDark hover:bg-surfaceDark">
          {{ action.label }}
          <Icon icon="mdi:arrow-top-right" class="size-4 shrink-0" />
        </a>
      </li>
    </ul>

    <div class="mt-8 rounded-radius bg-surfaceDark p-3 sm:p-4">
      <ProjectMedia
        :src="project.cover"
        :alt="project.title"
        eager
      />
    </div>
  </header>
</template>
