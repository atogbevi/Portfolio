<script setup>
  import { Icon } from '@iconify/vue';
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-6 py-4 lg:px-10 bg-background">
    <nav>
        <ul class="flex items-center justify-between">
            <li>
                <a href="/" class="font-bold text-primaryText">ALVA STUDIO</a>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition-colors hover:text-secondaryText">
                <span class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-700 group-hover:max-w-[200px] group-hover:opacity-100">
                  Entrer en contact
                </span>
                <Icon icon="mdi-light:email" class="size-6 shrink-0" />
              </a>
            </li>
        </ul>
    </nav>
  </header>
</template>