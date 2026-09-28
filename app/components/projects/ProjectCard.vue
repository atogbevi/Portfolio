<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<{
  title: string
  description: string
  cover: string
  stack?: string[]
  demoUrl?: string
  demoLabel?: string
  caseStudySlug?: string
}>(), {
  stack: () => [],
  demoLabel: 'Voir le projet',
})

const caseStudyPath = computed(() =>
  props.caseStudySlug ? `/projets/${props.caseStudySlug}` : '',
)

const coverComponent = computed(() => {
  if (caseStudyPath.value) return 'NuxtLink'
  if (props.demoUrl) return 'a'
  return 'div'
})

const coverAttrs = computed(() => {
  if (caseStudyPath.value) return { to: caseStudyPath.value }
  if (props.demoUrl) {
    return {
      href: props.demoUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return {}
})
</script>

<template>
  <article class="rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-5 sm:p-7 lg:p-8">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
      <div class="flex min-w-0 flex-1 flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-2xl font-light leading-tight text-white lg:text-3xl">
            <NuxtLink
              v-if="caseStudyPath"
              :to="caseStudyPath"
              class="transition-colors hover:text-accentLightBlue"
            >
              {{ title }}
            </NuxtLink>
            <template v-else>{{ title }}</template>
          </h3>
          <p class="text-base leading-relaxed text-stone-400">{{ description }}</p>
          <ul v-if="stack.length" class="flex flex-wrap gap-2">
            <li
              v-for="item in stack"
              :key="item"
              class="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-stone-300"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div v-if="demoUrl || caseStudyPath" class="flex flex-wrap items-center gap-3">
          <a
            v-if="demoUrl"
            :href="demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-accentLightBlue px-5 py-2.5 text-sm font-medium text-stone-950 transition-transform hover:-translate-y-0.5"
          >
            {{ demoLabel }}
            <Icon icon="mdi:arrow-top-right" class="size-4" />
          </a>
          <NuxtLink
            v-if="caseStudyPath"
            :to="caseStudyPath"
            class="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
          >
            Lire l'étude
          </NuxtLink>
        </div>
      </div>

      <div class="w-full shrink-0 lg:w-[42%] lg:max-w-md">
        <component
          :is="coverComponent"
          v-bind="coverAttrs"
          class="group relative block rounded-2xl bg-accentDarkBlue p-2"
          :aria-label="coverComponent === 'div' ? undefined : title"
        >
          <img
            :src="cover"
            :alt="title"
            class="h-56 w-full rounded-[1.15rem] object-cover object-top sm:h-64 lg:h-72"
          />
          <span
            v-if="coverComponent !== 'div'"
            class="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-stone-950/25 bg-accentLightBlue text-stone-950 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <Icon icon="mdi:arrow-top-right" class="size-5" />
          </span>
        </component>
      </div>
    </div>
  </article>
</template>
