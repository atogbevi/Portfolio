<script setup>
import { Icon } from '@iconify/vue';
import { projects as caseStudies } from '~/data/projects'

defineProps({
    active: Boolean,
})

function caseStudyFor(card) {
    if (!card.slug) return null
    return caseStudies.find(item => item.slug === card.slug) ?? null
}

const skills = [
    {
        id: 1,
        name: 'Python',
        icon: 'simple-icons:python',
    },
    {
        id: 2,
        name: 'Power BI',
        icon: 'simple-icons:powerbi',
    },
    {
        id: 3,
        name: 'Excel',
        icon: 'simple-icons:microsoftexcel',
    },
    {
        id: 4,
        name: 'SQL',
        icon: 'simple-icons:mysql',
    },
    {
        id: 5,
        name: 'PostgreSQL',
        icon: 'simple-icons:postgresql',
    }

]

const projects = [
    {
        id: 1,
        slug: 'economie-numerique-togo',
        name: "Diagnostic de l'accès aux télécommunications et aux services numériques",
        description: "Où l'accès aux services numériques manque-t-il au Togo ? Un diagnostic par préfecture et par canton, construit à partir de données ouvertes.",
        summary: "Où l'accès aux services numériques manque-t-il au Togo ? Un diagnostic par préfecture et par canton, construit à partir de données ouvertes.",
        stack: ['Python', 'Streamlit'],
        cover: '/images/data_analysis/economie-numerique-tg/project4.png',
        link: 'https://togo-diagnostic-acces-numerique.streamlit.app/',
    },
    {
        id: 2,
        slug: 'acces-electricite-togo',
        name: 'Électricité, énergie propre et forêts au Togo',
        description: "Le Togo veut électrifier ses campagnes d'ici 2030 sans épuiser ses forêts — un vrai casse-tête, puisque la plupart des ménages cuisinent encore au bois et au charbon. J'ai analysé six jeux de données publiques (accès à l'électricité, énergie des ménages, émissions polluantes, climat, forêts protégées) pour comprendre où se situent les vrais points de tension, et j'ai construit un outil interactif bilingue (français/anglais) pour explorer ces résultats. Une découverte marquante : ce n'est pas le secteur de l'énergie qui pollue le plus au Togo, mais l'agriculture et la déforestation — un constat qui change la façon de penser les priorités climatiques du pays.",
        summary: "Le Togo veut électrifier ses campagnes d'ici 2030 sans épuiser ses forêts, puisque la plupart des ménages cuisinent au bois et au charbon.",
        stack: ['Python', 'Streamlit'],
        cover: '/images/data_analysis/project1.png',
        link: 'https://energie-transition-ecologique-togo.streamlit.app/',
    },

    {
        id: 3,
        slug: 'acces-eau-potable-togo',
        name: "Accès à l'eau potable au Togo",
        description: "Combien de villages togolais manquent encore de points d'eau fiables, et où faut-il investir en priorité ? Pour répondre à cette question, j'ai croisé cinq sources de données publiques (infrastructures existantes, risques d'inondation, densité de population) afin de construire un outil interactif qui identifie, région par région, les zones les plus urgentes à équiper ou à entretenir. Le résultat : une carte claire des priorités d'investissement, utilisable par des décideurs pour orienter des financements vers les endroits qui en ont le plus besoin.",
        summary: "Combien de villages togolais manquent encore de points d'eau fiables, et où faut-il investir en priorité ?",
        stack: ['Python', 'Streamlit'],
        cover: '/images/data_analysis/project2.png',
        link: 'https://acces-eau-tg.streamlit.app/',
    },
    {
        id: 4,
        slug: 'health-map',
        name: 'HealthMap — Cartographie des acteurs et infrastructures de santé au Togo',
        description: "HealthMap est une plateforme web dédiée à l’exploration et à la visualisation des données liées au secteur de la santé au Togo. Le projet permet de rechercher et filtrer différentes entités du secteur, notamment les pharmacies, laboratoires, établissements et acteurs de la HealthTech, tout en explorant leurs informations et leur localisation. Une attention particulière a été portée à la collecte, au nettoyage et à la structuration des données. Plusieurs jeux de données géospatiales issus de GEODATA Togo ont été traités avec Python et Pandas avant d’être intégrés dans une base PostgreSQL via Supabase. La plateforme comprend également un dashboard permettant d’explorer la répartition des entités par catégorie et par zone géographique.",
        summary: "Rechercher et filtrer pharmacies, laboratoires et acteurs de la HealthTech, et explorer leur répartition par zone.",
        stack: ['Nuxt', 'Tailwind', 'Supabase', 'Python', 'Chart.js'],
        cover: '/images/data_analysis/project3.png',
        link: 'https://health-map-tau.vercel.app/',
    },
]

defineEmits(['close'])
</script>

<template>
    <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="data-panel-title"
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
                        <p class="text-xs">03 / DATA ANALYSIS</p>
                        <p id="data-panel-title" class="text-4xl font-light text-accentLight md:text-5xl">From data to <span
                                class="italic text-inkOnDark">insights</span></p>
                    </div>

                    <!-- Skills -->
                    <div class="flex flex-col gap-12">
                        <p class="text-xl">Je transforme des données brutes en informations exploitables.
                            De l'ETL à la visualisation, je travaille sur des données réelles pour faire
                            émerger des tendances, comprendre des problématiques et construire des outils
                            d'aide à la décision.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <div v-for="skill in skills" :key="skill.id"
                                class="flex flex-col items-center gap-2">
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
                        :case-study-slug="caseStudyFor(project)?.slug"
                    />
                </div>
            </div>
        </div>
    </section>
</template>