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
            image: '/images/designs/kangaroo.jpg',
            link: 'https://www.figma.com/design/4Ie8e5F4hkRvzooPlaKzsc/Designs?node-id=424-201&t=KaE1FeRO5Q0YGTv5-1',
        },
        {
            id: 2,
            title: 'Carte de Mariage',
            description: 'UI Design',
            image: '/images/designs/carte.jpg',
            link: 'https://www.figma.com/design/n69XWHzsDuXaV7qIDPaLSj/Carte-de-Mariage?node-id=88-43&t=EwjdvDvmtgwpgWco-1',
        },
        {
            id: 3,
            title: 'Ustudi',
            description: 'UI Design',
            image: '/images/designs/ustudi.jpg',
            link: 'https://www.figma.com/design/vj24iYVuMENyka3H8KXuZO/USTUDI?node-id=7-616&t=LAQxweckwI3N65xy-1',
        },
        {
            id: 4,
            title: 'KIZO',
            description: 'Media Post',
            image: '/images/designs/dsg1.jpg',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7399882110821519360',
        },
        {
            id: 5,
            title: 'Bot-Coin',
            description: 'Sticker Design',
            image: '/images/designs/dsg2.jpg',
            // link: '',
        },
        {
            id: 6,
            title: 'Shoppy',
            description: 'Visuel publicitaire',
            image: '/images/designs/dsg3.jpg',
            link: 'https://canva.link/rqkg00l84p5tr9a',
        },
    ]
</script>

<template>
    <section
        class="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-stone-200 py-32 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        :class="active
            ? 'translate-y-0'
            : 'translate-y-full'"
    >
        <div class="flex flex-1 flex-col">
            <button @click="$emit('close')" class="absolute top-20 right-6 text-primaryText text-xl hover:text-secondaryText transition-all duration-300 ease-linear">
                <Icon icon="mdi:close" class="size-8" />
            </button>
            <div class="w-full px-6 lg:w-3/5 mx-auto lg:px-0">

                <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-32">
                    <div class="flex flex-col gap-8 lg:flex-1">
                        <p class="text-xs text-secondaryText">02 / GRAPHIC DESIGN</p>
                        <h3 class="text-6xl italic text-primaryText md:text-7xl lg:text-[90px]">Formes & <br/>Typos</h3>
                    </div>
                    <div class="lg:flex-1">
                        <p class="text-secondaryText text-xl">
                            Le design n'est pas qu'une simple décoration ; c'est une pensée visuelle.<br/>
                            Je crée des identités visuelles qui ne se contentent pas d’être belles, mais qui traduisent une intention claire.
                            Typographie, composition, rythme : chaque élément a un rôle précis.
                        </p>
                    </div>
                </div>

                <!-- Projects -->
                <!-- Web designs -->
                <div class="mt-40">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        <div
                            v-for="project in projects.slice(0, 3)"
                            :key="project.id"
                            class="flex min-w-0 flex-col overflow-hidden bg-cardBg hover:scale-[0.98] transition-transform duration-500"
                        >
                            <a :href="project.link" target="_blank" class="group flex min-h-0 flex-1 flex-col">
                                <div class="flex w-full max-h-96 shrink-0 items-center justify-center overflow-hidden bg-accentLight">
                                    <img
                                        :src="project.image"
                                        :alt="project.title"
                                        class="max-h-96 w-full object-contain"
                                    />
                                </div>
                                <div class="mt-auto flex items-center justify-between gap-4 border-t border-borderLight px-4 py-3">
                                    <p class="font-medium text-primaryText truncate">{{ project.title }}</p>
                                    <p class="text-sm text-secondaryText shrink-0">{{ project.description }}</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    <!-- Media designs -->
                    <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mt-20">
                        <div v-for="project in projects.slice(3, 6)" :key="project.id" class="flex flex-col overflow-hidden bg-cardBg hover:scale-[0.98] transition-transform duration-500">
                            <a :href="project.link" target="_blank" class="group flex min-h-0 flex-1 flex-col">
                                <div class="flex w-full h-72 shrink-0 items-center justify-center overflow-hidden bg-accentLight">
                                    <img
                                        :src="project.image"
                                        :alt="project.title"
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                                <div class="mt-auto flex items-center justify-between gap-4 border-t border-borderLight px-4 py-3">
                                    <p class="font-medium text-primaryText truncate">{{ project.title }}</p>
                                    <p class="text-sm text-secondaryText text-wrap">{{ project.description }}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Quote block -->
                    <div class="mt-8 flex overflow-hidden bg-primaryText">
                        <div class="w-1 shrink-0 bg-stone-400/60" aria-hidden="true" />
                        <div class="flex flex-1 flex-col items-center justify-center px-12 py-20 text-center md:py-28">
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