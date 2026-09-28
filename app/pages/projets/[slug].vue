<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { projects } from '~/data/projects'

const route = useRoute()
const { activeService, serviceOpen } = useServicePanel()
const headerSurface = useHeaderSurface()

function resetInheritedPanel() {
  activeService.value = null
  serviceOpen.value = false
  headerSurface.value = 'default'
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

resetInheritedPanel()
onMounted(resetInheritedPanel)

const slug = computed(() => {
  const param = route.params.slug
  return Array.isArray(param) ? param[0] : String(param ?? '')
})

const project = computed(() => projects.find(item => item.slug === slug.value) ?? null)

if (import.meta.server && !project.value) {
  const event = useRequestEvent()
  if (event) setResponseStatus(event, 404)
}

useSeoMeta({
  title: () => project.value?.title ?? 'Projet introuvable',
  description: () => project.value?.tagline ?? 'Ce projet est introuvable.',
})

const linkLabels = {
  demo: 'Voir le dashboard',
  code: 'Voir le code',
  report: 'Lire le rapport (PDF)',
} as const

const actions = computed(() => {
  const current = project.value
  if (!current) return []

  return (Object.keys(linkLabels) as (keyof typeof linkLabels)[]).flatMap((key) => {
    const href = current.links[key]
    if (!href) return []
    return [{ key, href, label: linkLabels[key] }]
  })
})

const nextProject = computed(() => {
  const current = project.value
  if (!current) return null
  const index = projects.findIndex(item => item.slug === current.slug)
  if (index < 0) return null
  return projects[index + 1] ?? null
})
</script>

<template>
  <article v-if="project" class="project-detail bg-background text-primaryText">
    <ProjectHero :project="project" :actions="actions" />

    <div class="mx-auto max-w-5xl px-6 pb-28 lg:px-10">
      <section class="mt-28 max-w-3xl lg:mt-36">
        <h2 class="font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
          Contexte
        </h2>
        <div class="mt-8 flex flex-col gap-6 text-base leading-relaxed text-primaryText md:text-lg">
          <p v-for="(paragraph, index) in project.context" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <ProjectKpis :kpis="project.kpis" />
      <ProjectSteps :steps="project.steps" />
      <ProjectChallenges :challenges="project.challenges" />
      <ProjectLessons
        :lessons="project.lessons"
        :limits="project.limits"
        :next="project.next"
      />
      <ProjectGallery :images="project.gallery" />

      <footer class="mt-28 border-t border-borderLight pt-16 lg:mt-36">
        <ul v-if="actions.length" class="flex flex-col gap-4">
          <li v-for="action in actions" :key="action.key">
            <a
              :href="action.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-base text-primaryText transition-colors hover:text-secondaryText motion-reduce:transition-none"
            >
              {{ action.label }}
            </a>
          </li>
        </ul>

        <p class="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
          Stack
        </p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="item in project.stack"
            :key="item"
            class="rounded-full border border-borderLight px-3 py-1 text-xs text-secondaryText"
          >
            {{ item }}
          </li>
        </ul>

        <div v-if="nextProject" class="mt-16">
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
            Projet suivant
          </p>
          <NuxtLink
            :to="`/projets/${nextProject.slug}`"
            class="mt-4 inline-block font-['Newsreader'] text-2xl font-light text-primaryText transition-colors hover:text-secondaryText motion-reduce:transition-none"
          >
            {{ nextProject.title }}
          </NuxtLink>
        </div>
      </footer>
    </div>
  </article>

  <article v-else class="project-detail bg-background px-6 py-24 text-primaryText lg:px-10">
    <div class="mx-auto max-w-3xl">
      <p class="text-xs font-medium uppercase tracking-[0.28em] text-secondaryText">
        404
      </p>
      <h1 class="mt-6 font-['Newsreader'] text-4xl font-light leading-tight text-primaryText md:text-5xl">
        Projet introuvable
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-secondaryText">
        Cette adresse ne correspond à aucun projet.
      </p>
      <NuxtLink
        to="/"
        class="mt-10 inline-flex items-center gap-3 text-sm text-primaryText transition-colors hover:text-secondaryText motion-reduce:transition-none"
      >
        <span aria-hidden="true">←</span>
        <span>Retour à l'accueil</span>
      </NuxtLink>
    </div>
  </article>
</template>

<style>
@media (prefers-reduced-motion: reduce) {
  .project-detail,
  .project-detail * {
    scroll-behavior: auto !important;
    animation: none !important;
    transition: none !important;
  }
}
</style>
