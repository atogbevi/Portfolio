<script setup>
    import { Icon } from '@iconify/vue';

    defineProps({
        active: Boolean,
    })

    defineEmits(['close'])

    const projects = [
        {
            id: 1,
            title: 'Icy Kangaroo',
            description: 'UI Design',
            summary: 'UI Design',
            image: '/images/designs/kangaroo.jpg',
            link: 'https://www.figma.com/design/4Ie8e5F4hkRvzooPlaKzsc/Designs?node-id=424-201&t=KaE1FeRO5Q0YGTv5-1',
        },
        {
            id: 2,
            title: 'Carte de Mariage',
            description: 'UI Design',
            summary: 'UI Design',
            image: '/images/designs/carte.jpg',
            link: 'https://www.figma.com/design/n69XWHzsDuXaV7qIDPaLSj/Carte-de-Mariage?node-id=88-43&t=EwjdvDvmtgwpgWco-1',
        },
        {
            id: 3,
            title: 'Ustudi',
            description: 'UI Design',
            summary: 'UI Design',
            image: '/images/designs/ustudi.jpg',
            link: 'https://www.figma.com/design/vj24iYVuMENyka3H8KXuZO/USTUDI?node-id=7-616&t=LAQxweckwI3N65xy-1',
        },
        {
            id: 4,
            title: 'KIZO',
            description: 'Media Post',
            summary: 'Media Post',
            image: '/images/designs/dsg1.jpg',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7399882110821519360',
        },
        {
            id: 5,
            title: 'Bot-Coin',
            description: 'Sticker Design',
            summary: 'Sticker Design',
            image: '/images/designs/dsg2.jpg',
            // link: '',
        },
        {
            id: 6,
            title: 'Shoppy',
            description: 'Visuel publicitaire',
            summary: 'Visuel publicitaire',
            image: '/images/designs/dsg3.jpg',
            link: 'https://canva.link/rqkg00l84p5tr9a',
        },
    ]
</script>

<template>
    <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-panel-title"
        class="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-stone-200 py-32 transition-transform duration-[var(--panel-duration)] ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="active
            ? 'translate-y-0'
            : 'translate-y-full'"
    >
        <div class="flex flex-1 flex-col">
            <button
                type="button"
                data-panel-close
                aria-label="Fermer"
                class="absolute right-6 top-20 text-xl text-primaryText transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accentInk"
                @click="$emit('close')"
            >
                <Icon icon="mdi:close" class="size-8" />
            </button>
            <div class="mx-auto w-full px-6 lg:w-3/4 lg:px-0">

                <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-32">
                    <div class="flex flex-col gap-8 lg:flex-1">
                        <p class="text-xs text-primaryText">02 / GRAPHIC DESIGN</p>
                        <h3 id="design-panel-title" class="text-6xl italic text-primaryText md:text-7xl lg:text-[90px]">Formes & <br/>Typos</h3>
                    </div>
                    <div class="lg:flex-1">
                        <p class="text-xl text-primaryText">
                            Le design n'est pas qu'une simple décoration ; c'est une pensée visuelle.<br/>
                            Je crée des identités visuelles qui ne se contentent pas d’être belles, mais qui traduisent une intention claire.
                            Typographie, composition, rythme : chaque élément a un rôle précis.
                        </p>
                    </div>
                </div>

                <!-- Projects -->
                
                <div class="mt-40 flex flex-col gap-8">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.id"
                        tone="light"
                        :title="project.title"
                        :summary="project.summary"
                        :cover="project.image"
                        :demo-url="project.link || undefined"
                    />

                    <!-- Quote block -->
                    <div class="mt-8 overflow-hidden bg-primaryText">
                        <div class="flex flex-col items-center justify-center px-12 py-20 text-center md:py-28">
                            <blockquote class="text-4xl font-light italic leading-tight text-white md:text-5xl lg:text-6xl">
                                "Less is only more<br />when done right."
                            </blockquote>
                            <p class="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-white/90">
                                Frank Chimero
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>