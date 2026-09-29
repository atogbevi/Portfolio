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
  <section class="mt-14 lg:mt-16">
    <div class="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-surfaceDark py-12 text-inkOnDark sm:py-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 class="font-['Newsreader'] text-2xl font-light md:text-3xl">
          Problèmes rencontrés et solutions
        </h2>

        <div class="mt-6 flex flex-col">
          <article
            v-for="(challenge, index) in challenges"
            :key="challenge.problem"
            class="border-t border-borderOnDark py-6"
          >
            <p class="text-sm font-medium tabular-nums text-accentLightBlue">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3
              v-if="splitProblem(challenge.problem).lead"
              class="mt-2 text-xl font-light leading-snug"
            >
              {{ splitProblem(challenge.problem).lead }}
            </h3>

            <p class="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-accentLightBlue">
              Problème
            </p>
            <p class="mt-2 text-base leading-relaxed">
              {{ splitProblem(challenge.problem).body }}
            </p>

            <p class="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-accentLightBlue">
              Solution
            </p>
            <p class="mt-2 text-base leading-relaxed">
              {{ challenge.solution }}
            </p>

            <ProjectMedia
              v-if="challenge.image"
              class="mt-4"
              :src="challenge.image"
              :alt="splitProblem(challenge.problem).lead || challenge.solution"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
