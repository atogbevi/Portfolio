<script setup>
    defineProps({
        active: Boolean,
    })
</script>

<template>
    <section
        class="fixed inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto"
        :class="active
            ? 'translate-y-0'
            : 'translate-y-full'"
        >
        <p>Design Services</p>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <p>Design Services</p>
            </div>
        </div>
    </section>
</template>