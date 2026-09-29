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
      
    ]

    const projects = [
      {
          id: 1,
          name: 'HealthMap — Cartographie des acteurs et infrastructures de santé au Togo',
          description: "HealthMap est une plateforme web dédiée à l’exploration et à la visualisation des données liées au secteur de la santé au Togo. Le projet permet de rechercher et filtrer différentes entités du secteur, notamment les pharmacies, laboratoires, établissements et acteurs de la HealthTech, tout en explorant leurs informations et leur localisation. Une attention particulière a été portée à la collecte, au nettoyage et à la structuration des données. Plusieurs jeux de données géospatiales issus de GEODATA Togo ont été traités avec Python et Pandas avant d’être intégrés dans une base PostgreSQL via Supabase. La plateforme comprend également un dashboard permettant d’explorer la répartition des entités par catégorie et par zone géographique.",
          summary: "Rechercher et filtrer pharmacies, laboratoires et acteurs de la HealthTech, et explorer leur répartition par zone.",
          stack: ['Nuxt', 'Tailwind', 'Supabase', 'Python', 'Chart.js'],
          cover: '/images/data_analysis/project3.png',
          link: 'https://health-map-tau.vercel.app/',
      },
      {
        id: 2,
        name: 'Sucu - Orientation universitaire intelligente',
        description: 'SUCU est une plateforme d’aide à l’orientation conçue pour accompagner les étudiants dans le choix de leur parcours académique. Le système s’appuie sur des modèles psychométriques (RIASEC, Big Five, aptitudes) combinés à un algorithme de recommandation basé sur la similarité vectorielle. L’objectif : proposer des orientations cohérentes avec le profil, les compétences et les aspirations de chaque utilisateur. Pensé comme une réponse aux limites des dispositifs d’orientation traditionnels en Afrique, SUCU introduit une approche plus objective, personnalisée et accessible.',
        summary: "SUCU accompagne les étudiants dans le choix de leur parcours, avec des modèles psychométriques et un algorithme de recommandation.",
        stack: ['Nuxt', 'Tailwind', 'FastAPI', 'MongoDB','Python'],
        cover: '/images/websites/project1.jpg',
        link: 'https://web-sucu.vercel.app/',
      },
    
      {
        id: 3,
        name: 'Vemianou - Site vitrine associatif',
        description: 'Vémianou est une association et ce projet est un site vitrine développé pour valoriser les actions et les engagements de cette association. La plateforme permet de présenter les missions, publier des articles et mettre en avant les activités à travers une galerie d\'images. Les contenus dynamiques tels que les articles et les images sont entièrement administrable via un CMS, offrant à l’équipe une autonomie dans la gestion du site.',
        summary: "Site vitrine pour présenter les missions, publier des articles et montrer les activités, avec des contenus administrables via un CMS.",
        stack: ['Nuxt', 'Tailwind', 'Strapi', 'EmailJS'],
        cover: '/images/websites/project2.jpg',
        link: 'https://vemianou-web.vercel.app/',
      },
    ]

    defineEmits(['close'])
</script>

<template>
  <section
    role="dialog"
    aria-modal="true"
    aria-labelledby="web-panel-title"
    class="fixed inset-0 z-40 overflow-y-auto transition-transform duration-[var(--panel-duration)] ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="active ? 'translate-y-0' : 'translate-y-full'">
    <div class="fixed inset-0 overflow-y-auto bg-stone-900 text-inkOnDark">
      <button
        type="button"
        data-panel-close
        aria-label="Fermer"
        class="absolute right-6 top-20 text-inkOnDark transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:underline"
        @click="$emit('close')"
      >
        <Icon icon="mdi:close" class="size-8" />
      </button>

      <div class="w-4/5 mx-auto py-32 lg:w-3/4">
        <div class="flex flex-col gap-20 items-start lg:flex-row lg:items-center lg:gap-32 ">
          <div class="flex flex-col gap-4">
            <p class="text-xs">01 / WEB DEVELOPMENT</p>
            <p id="web-panel-title" class="text-4xl font-light text-accentLight md:text-5xl">Code as <br/> Architecture</p>
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
              <div v-for="skill in skills" :key="skill.id" class="flex flex-col items-center gap-2">
                <Icon :icon="skill.icon" class="text-2xl" />
                <p class="text-xs">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <hr class="my-20 border-stone-500/20" />
        <div class="flex flex-col gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            tone="dark"
            :title="project.name"
            :summary="project.summary"
            :cover="project.cover"
            :stack="project.stack"
            :demo-url="project.link || undefined"
          />
        </div>
      </div>
    </div>
    </section>
  </template>
  