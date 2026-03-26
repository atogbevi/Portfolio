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
        name: 'Sucu - Orientation universitaire intelligente',
        description: 'SUCU est une plateforme d’aide à l’orientation conçue pour accompagner les étudiants dans le choix de leur parcours académique. Le système s’appuie sur des modèles psychométriques (RIASEC, Big Five, aptitudes) combinés à un algorithme de recommandation basé sur la similarité vectorielle. L’objectif : proposer des orientations cohérentes avec le profil, les compétences et les aspirations de chaque utilisateur. Pensé comme une réponse aux limites des dispositifs d’orientation traditionnels en Afrique, SUCU introduit une approche plus objective, personnalisée et accessible.',
        stack: ['Nuxt', 'Tailwind', 'FastAPI', 'MongoDB','Python'],
        cover: '/images/websites/project1.jpg',
        link: 'https://web-sucu.vercel.app/',
      },
    
      {
        id: 2,
        name: 'Vemianou - Site vitrine associatif',
        description: 'Vémianou est une association et ce projet est un site vitrine développé pour valoriser les actions et les engagements de cette association. La plateforme permet de présenter les missions, publier des articles et mettre en avant les activités à travers une galerie d\'images. Les contenus dynamiques tels que les articles et les images sont entièrement administrable via un CMS, offrant à l’équipe une autonomie dans la gestion du site.',
        stack: ['Nuxt', 'Tailwind', 'Strapi', 'EmailJS'],
        cover: '/images/websites/project2.jpg',
        link: 'https://vemianou-web.vercel.app/',
      },
    ]

    defineEmits(['close'])
</script>

<template>
  <section 
    class="fixed inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto"
    :class="active ? 'translate-y-0' : 'translate-y-full'">
    <div class="fixed inset-0 bg-stone-900 text-stone-400 overflow-y-auto">
      <button @click="$emit('close')" class="absolute top-20 right-6 text-white hover:text-secondaryText transition-all duration-300 ease-linea">
        <Icon icon="mdi:close" class="size-8" />
      </button>

      <div class="w-4/5 mx-auto py-32 lg:w-3/4">
        <div class="flex flex-col gap-20 items-start lg:flex-row lg:items-center lg:gap-32 ">
          <div class="flex flex-col gap-4">
            <p class="text-xs">01 / WEB DEVELOPMENT</p>
            <p class="text-4xl text-accentLight font-light md:text-5xl">Code as <br/> Architecture</p>
          </div>

          <!-- Skills -->
          <div class="flex flex-col gap-12">
            <p class="text-xl">Je conçois des environnements digitaux où la technique sert l’expérience.
              Mon approche repose sur des bases solides, des performances optimisées et une attention particulière aux détails.
              Chaque projet est pensé comme une architecture : claire, structurée, évolutive.
              J'utilise des technologies modernes pour créer des interfaces fluides, intuitives et durables.
              Pas de complexité inutile — uniquement l'essentiel, bien exécuté.
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
          <div v-for="project in projects" :key="project.id" class="flex flex-col gap-12 mb-20 lg:flex-row md:items-center lg:gap-32">
            <div class="flex flex-col gap-4 lg:flex-1">
              <p class="text-xl text-accentLight lg:text-2xl">{{ project.name }}</p>
              <p class="text-lg">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <p>Stack : 
                  <span v-for="(stack, index) in project.stack" :key="stack" class="text-sm">
                    {{ stack }}<span v-if="index < project.stack.length - 1"> - </span>
                  </span>
                </p>
              </div>
            </div>
            <div class="flex w-full h-80 mt-10 bg-stone-500 rounded-lg lg:flex-1 lg:mt-0">
              <a :href="project.link" target="_blank" class="block w-full h-full">
                <img :src="project.cover" :alt="project.name" class="w-full h-full object-cover rounded-lg object-top" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
    </section>
  </template>
  