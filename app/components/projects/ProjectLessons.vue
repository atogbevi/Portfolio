<script setup lang="ts">
defineProps<{
  lessons: string[]
  limits: string[]
  next: string[]
}>()
</script>

<template>
  <section class="mt-28 max-w-3xl lg:mt-36">
    <h2 class="font-['Newsreader'] text-3xl font-light text-primaryText md:text-4xl">
      Enseignements et limites
    </h2>

    <div class="mt-12 flex flex-col gap-16">
      <div>
        <h3 class="text-2xl font-light text-primaryText">
          Ce que j'en retiens
        </h3>
        <ul class="mt-6 flex flex-col gap-5">
          <li
            v-for="item in lessons"
            :key="item"
            class="text-base leading-relaxed text-primaryText"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-light text-primaryText">
          Ce que les données ne permettent pas
        </h3>
        <ul class="mt-6 flex flex-col gap-5">
          <li
            v-for="item in limits"
            :key="item"
            class="text-base leading-relaxed text-primaryText"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-light text-primaryText">
          Avec plus de temps
        </h3>
        <ul class="mt-6 flex flex-col gap-5">
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
