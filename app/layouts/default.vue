<script setup lang="ts">
import { computed } from 'vue'

const surface = useHeaderSurface()
const showFooter = computed(() => surface.value === 'default')
</script>

<template>
    <main class="bg-background">
        <Header />
        <div class="min-h-screen bg-background pt-16">
            <NuxtPage />
        </div>
        <Footer v-if="showFooter" />
    </main>
</template>