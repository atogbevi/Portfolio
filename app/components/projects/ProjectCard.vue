<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { projects } from '~/data/projects'
import { publicAsset } from '~/utils/publicAsset'

const props = withDefaults(defineProps<{
  title: string
  summary: string
  cover: string
  tone?: 'dark' | 'light'
  stack?: string[]
  demoUrl?: string
  caseStudySlug?: string
}>(), {
  tone: 'dark',
  stack: () => [],
})

const caseStudyPath = computed(() => {
  const slug = props.caseStudySlug
  if (!slug) return ''
  const exists = projects.some(project => project.slug === slug)
  return exists ? `/projets/${slug}` : ''
})

const coverSrc = computed(() => publicAsset(props.cover))

const articleClass = computed(() =>
  props.tone === 'light'
    ? 'border-borderStrong bg-cardBg text-primaryText'
    : 'border-borderOnDark bg-surfaceDark text-inkOnDark',
)

const frameClass = computed(() =>
  props.tone === 'light' ? 'border-borderStrong' : 'border-borderOnDark',
)

const tagClass = computed(() =>
  props.tone === 'light'
    ? 'border-borderStrong text-primaryText'
    : 'border-borderOnDark text-inkOnDark',
)

const demoClass = computed(() =>
  props.tone === 'light'
    ? 'bg-accentInk text-inkOnDark hover:bg-surfaceDark'
    : 'bg-accentLightBlue text-surfaceDark hover:bg-accentInk hover:text-inkOnDark',
)

const studyClass = computed(() =>
  props.tone === 'light'
    ? 'border border-borderStrong text-primaryText hover:bg-surfaceDark hover:text-inkOnDark'
    : 'border border-borderOnDark text-inkOnDark hover:bg-inkOnDark hover:text-surfaceDark',
)
</script>

<template>
  <article
    class="group relative rounded-2xl border p-5 sm:p-7 lg:p-8"
    :class="articleClass">

    <NuxtLink
      v-if="caseStudyPath"
      :to="caseStudyPath"
      class="absolute inset-0 z-0 rounded-radius"
      :aria-label="title"
    />

    <div class="relative z-10 flex flex-col gap-8 pointer-events-none lg:flex-row lg:items-center lg:gap-10">
      <div class="flex min-w-0 flex-1 flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3
            class="text-2xl font-light leading-tight lg:text-3xl hover:text-accentLightBlue "
            :class="caseStudyPath ? 'underline-offset-8 group-hover:underline' : ''">
            {{ title }}
          </h3>
          <p class="line-clamp-2 text-base leading-relaxed">{{ summary }}</p>
          <ul v-if="stack.length" class="flex flex-wrap gap-2">
            <li
              v-for="item in stack"
              :key="item"
              class="rounded-full border px-3 py-1 text-xs tracking-wide"
              :class="tagClass"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div v-if="caseStudyPath || demoUrl" class="pointer-events-auto flex flex-wrap gap-3">
          <NuxtLink
            v-if="caseStudyPath"
            :to="caseStudyPath"
            class="relative z-20 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :class="studyClass"
          >
            Lire l'étude
          </NuxtLink>
          <a
            v-if="demoUrl"
            :href="demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-20 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :class="demoClass"
          >
            Voir le projet
            <Icon icon="mdi:arrow-top-right" class="size-4" />
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 lg:w-[42%] lg:max-w-md">
        <div class="rounded-radius border p-2" :class="frameClass">
          <img
            :src="coverSrc"
            :alt="caseStudyPath ? '' : title"
            class="h-56 w-full rounded-radius sm:h-64 lg:h-72"
            :class="tone === 'light' ? 'bg-accentLight object-contain' : 'object-cover object-top'"
          />
        </div>
      </div>
    </div>
  </article>
</template>
