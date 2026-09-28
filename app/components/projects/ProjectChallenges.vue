<script setup lang="ts">
import type { ProjectChallenge } from '~/data/projects'

defineProps<{
  challenges: ProjectChallenge[]
}>()

function splitProblem(problem: string) {
  const [lead, ...rest] = problem.split('\n\n')
  if (!rest.length) return { lead: '', body: problem }
  return { lead, body: rest.join('\n\n') }
}
</script>

<template>
  <section class="mt-28 max-w-3xl lg:mt-36">
    <h2 class="font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
      Problèmes rencontrés et solutions
    </h2>

    <div class="mt-12 flex flex-col gap-8">
      <article
        v-for="challenge in challenges"
        :key="challenge.problem"
        class="rounded-xl border border-borderLight bg-cardBg p-6 md:p-8"
      >
        <h3
          v-if="splitProblem(challenge.problem).lead"
          class="text-2xl font-light leading-snug text-primaryText"
        >
          {{ splitProblem(challenge.problem).lead }}
        </h3>

        <p class="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
          Problème
        </p>
        <p class="mt-3 text-base leading-relaxed text-primaryText">
          {{ splitProblem(challenge.problem).body }}
        </p>

        <p class="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-secondaryText">
          Solution
        </p>
        <p class="mt-3 text-base leading-relaxed text-primaryText">
          {{ challenge.solution }}
        </p>

        <ProjectMedia
          v-if="challenge.image"
          class="mt-8"
          :src="challenge.image"
          :alt="splitProblem(challenge.problem).lead || challenge.solution"
        />
      </article>
    </div>
  </section>
</template>
