<script setup lang="ts">
import type { ProjectKpi } from '~/data/projects'

defineProps<{
  kpis: ProjectKpi[]
}>()
</script>

<template>
  <section class="mt-28 lg:mt-36">
    <h2 class="max-w-3xl font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
      Résultats clés
    </h2>

    <dl class="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
      <div v-for="kpi in kpis" :key="kpi.label">
        <dt class="font-['Newsreader'] text-4xl font-light leading-none text-primaryText sm:text-5xl lg:text-6xl">
          {{ kpi.value }}
        </dt>
        <dd class="mt-4 max-w-sm text-base leading-relaxed text-secondaryText">
          {{ kpi.label }}
        </dd>
      </div>
    </dl>
  </section>
</template>
