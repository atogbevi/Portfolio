<script setup lang="ts">
defineProps<{
  lessons: string[]
  limits: string[]
  next: string[]
}>()
</script>

<template>
  <section class="mt-14 lg:mt-16">
    <h2 class="font-['Newsreader'] text-2xl font-light text-accentInk md:text-3xl">
      Enseignements et limites
    </h2>

    <div class="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
      <div v-if="lessons.length">
        <h3 class="text-lg font-medium text-accentInk">
          Ce que j'en retiens
        </h3>
        <ul class="mt-3 flex flex-col gap-3">
          <li
            v-for="item in lessons"
            :key="item"
            class="text-base leading-relaxed text-primaryText"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="limits.length">
        <h3 class="text-lg font-medium text-accentInk">
          Ce que les données ne permettent pas
        </h3>
        <ul class="mt-3 flex flex-col gap-3">
          <li
            v-for="item in limits"
            :key="item"
            class="text-base leading-relaxed text-primaryText"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="next.length">
        <h3 class="text-lg font-medium text-accentInk">
          Avec plus de temps
        </h3>
        <ul class="mt-3 flex flex-col gap-3">
          <li
            v-for="item in next"
            :key="item"
            class="text-base leading-relaxed text-primaryText"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
