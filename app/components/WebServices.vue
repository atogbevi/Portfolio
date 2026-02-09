<script setup>
    import { Icon } from '@iconify/vue';

    defineProps({
      active: Boolean,
    })

    const skills = [
      {
        id: 1,
        name: 'HTML',
        icon: 'mdi:language-html5',
      },
      {
        id: 2,
        name: 'CSS',
        icon: 'mdi:language-css3',
      },
      {
        id: 3,
        name: 'JS',
        icon: 'mdi:language-javascript',
      },
      {
        id: 4,
        name: 'NUXT',
        icon: 'mdi:nuxt',
      },
      {
        id: 5,
        name: 'TAILWIND',
        icon: 'mdi:tailwind',
      },
      {
        id: 6,
        name: 'VUE',
        icon: 'mdi:vuejs',
      },
      {
        id: 7,
        name: 'FLUTTER',
        icon: 'simple-icons:flutter',
      }
      
    ]

    const projects = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        cover: 'https://via.placeholder.com/150',
        link: 'https://www.google.com',
      },
    
      {
        id: 2,
        name: 'Project 2',
        description: 'Project 2 description',
        cover: 'https://via.placeholder.com/150',
        link: 'https://www.google.com',
      },
    ]

    defineEmits(['close'])
</script>

<template>
  <section 
    class="fixed inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto"
    :class="active ? 'translate-y-0' : 'translate-y-full'">
    <div class="fixed inset-0 bg-stone-900 text-stone-400 overflow-y-auto">
      <button @click="$emit('close')" class="absolute top-6 right-6 text-white text-xl">
        <Icon icon="mdi:close" class="size-6" />
      </button>

      <div class="w-4/5 mx-auto py-20 lg:w-3/5">
        <div class="flex flex-col gap-20 items-start md:flex-row md:items-center lg:gap-32 ">
          <div class="flex flex-col gap-4">
            <p class="text-xs">01 / WEB DEVELOPMENT</p>
            <p class="text-4xl text-accentLight font-light md:text-5xl">Code as <br/> Architecture</p>
          </div>

          <!-- Skills -->
          <div class="flex flex-col gap-12">
            <p class="text-xl">I build digital environments where function meets fluidity. 
              My approach combines clean, semantic markup with modern frameworks 
              to create experiences that feel instantaneous and robust. No bloat, 
              just essential performance.
            </p>
            <div class="flex flex-wrap gap-4">
              <div v-for="skill in skills" :key="skill.id" class="group flex flex-col items-center gap-2 transition-all duration-500 ease-linear hover:scale-110 hover:text-accentLight ">
                <Icon :icon="skill.icon" class="text-2xl transition-all duration-500 ease-linear group-hover:rotate-12" />
                <p class="text-xs">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <hr class="my-20 border-stone-500/20" />
        <div class="flex flex-col gap-20">
          <div v-for="project in projects" :key="project.id" class="flex flex-col justify-between mb-20 md:flex-row md:items-center">
            <div class="flex flex-col gap-4">
              <p class="text-xl text-accentLight lg:text-2xl">{{ project.name }}</p>
              <p class="text-sm">{{ project.description }}</p>
            </div>
            <div class="w-full h-80 mt-10 bg-stone-500 rounded-lg md:w-1/2 lg:mt-0">
              <!-- <img :src="project.cover" :alt="project.name" class="w-full h-full object-cover rounded-lg" /> -->
            </div>

          </div>

        </div>
      </div>
    </div>
    </section>
  </template>
  