<script setup lang='ts'>
    import { Icon } from '@iconify/vue';
    
    defineProps({
        inactive: { type: Boolean, default: false },
    });
</script>

<template>
    <section
        class="w-full py-8 px-6 lg:py-12 lg:px-16
            transition-all duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="inactive
        ? 'scale-95 opacity-0 pointer-events-none'
        : 'scale-100 opacity-100'"
        >
        <div class="flex flex-col w-full gap-16 lg:flex-row lg:items-center">
            <div class="flex flex-col gap-4 lg:flex-1">
                <div class="flex w-fit gap-2 items-center p-2 rounded-lg border border-secondaryText">
                    <div class="relative inline-flex h-2 w-2 rounded-full bg-secondaryText animate-pulse" />
                    <p class="text-sm text-secondaryText">AVAILABLE FOR COMMISIONS</p>
                </div>
                <div class="flex flex-col gap-8">
                    <h1 class="text-5xl lg:text-6xl">
                        <span class="font-['Newsreader'] font-extralight text-primaryText">
                            Digital craftsmanship
                        </span> <br />
                        <span class="italic  text-secondaryText">
                            driven by intention
                        </span>
                    </h1>
                    <p class="text-secondaryText text-xl max-w-lg lg:text-2xl">Alva Studio is a multidisciplinary practice merging logic and emotion. We build digital products, capture moments, and design visual identities.</p>
                </div>

            </div>

            <div class="flex flex-col gap-4 lg:flex-1">
                <div class="h-96 w-full bg-secondaryText rounded-lg "/>
                <a href="#services" class="flex gap-4 items-center w-fit cursor-pointer hover:opacity-80 transition-opacity">
                    <Icon icon="mdi:mouse-variant" class="text-secondaryText size-8 animate-bounce" />
                    <span class="text-secondaryText text-sm">EXPLORE SERVICES</span>
                </a>
            </div>

        </div>
    </section>
</template>