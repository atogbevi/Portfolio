<script setup>
    import { Icon } from '@iconify/vue';
    defineProps({
        active: Boolean,
    })

    const images = [
        {id: 1, src: '/images/photos/photo1.jpg'},
        {id: 2, src: '/images/photos/photo2.jpg'},
        {id: 3, src: '/images/photos/photo3.jpg'},
        {id: 4, src: '/images/photos/photo4.jpg'},
        {id: 5, src: '/images/photos/photo5.jpg'},
        {id: 6, src: '/images/photos/photo6.jpg'},
        {id: 7, src: '/images/photos/photo7.jpg'},
        {id: 8, src: '/images/photos/photo8.jpg'},
        {id: 9, src: '/images/photos/photo9.jpg'},
        {id: 10, src: '/images/photos/photo10.jpg'},
        {id: 11, src: '/images/photos/photo11.jpg'},
        {id: 12, src: '/images/photos/photo12.jpg'},
        {id: 13, src: '/images/photos/photo13.jpg'},
        {id: 14, src: '/images/photos/photo14.jpg'},
    ]

</script>


<template>
    <section 
        class="fixed inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto "
        :class="active
            ? 'translate-y-0'
            : 'translate-y-full'"
        >

        <div class="fixed inset-0 flex flex-col py-32">
            <button @click="$emit('close')" class="absolute top-20 right-6 text-primaryText text-xl hover:text-secondaryText transition-all duration-300 ease-linear">
                <Icon icon="mdi:close" class="size-8" />
            </button>

            <!-- Text -->
            <div class="flex flex-col gap-4 w-1/2 mx-auto items-center">
                <Icon icon="mdi-light:camera" class="size-10 text-secondaryText" />
                <h3 class="text-2xl text-primaryText md:text-3xl lg:text-4xl">Stilled Life</h3>
                <p class="text-secondaryText text-center text-base md:text-lg lg:text-xl">
                    Observing the quiet moments in a loud world. My photography focuses on architecture, texture, and natural light, aiming to extract the essence of a subject without artifice.
                </p>

            </div>
            
            <!-- Masonry container -->
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-4/5 mx-auto pt-32">
                <!-- Image item -->
                <div
                    v-for="image in images"
                    :key="image.id"
                    class="break-inside-avoid group cursor-pointer"
                    >
                    <img
                        :src="image.src"
                        alt=""
                        class="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        
        </div>



    </section>
  </template>
