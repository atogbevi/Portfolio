<script setup lang="ts">
import type { ProjectKpi } from '~/data/projects'

defineProps<{
  kpis: ProjectKpi[]
}>()
</script>

<template>
  <section class="mt-14 lg:mt-16">
    <h2 class="font-['Newsreader'] text-2xl font-light text-accentInk md:text-3xl">
      Résultats clés
    </h2>

    <dl class="mt-5 flex gap-3 overflow-x-auto">
      <div
        v-for="kpi in kpis"
        :key="kpi.label"
        class="flex min-w-[11rem] flex-1 flex-col rounded-radius border border-borderStrong bg-cardBg p-4"
      >
        <dt class="font-['Newsreader'] text-2xl font-light tabular-nums leading-none text-accentInk sm:text-3xl">
          {{ kpi.value }}
        </dt>
        <dd class="mt-2 text-sm leading-snug text-primaryText">
          {{ kpi.label }}
        </dd>
      </div>
    </dl>
  </section>
</template>
