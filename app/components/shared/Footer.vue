<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue';

const route = useRoute()
const { openService } = useServicePanel()

async function goToService(id: number) {
  // If we are not on home, navigate first
  if (route.path !== '/') {
    await navigateTo('/')
  }
  openService(id)
}

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angelica-togbevi-042824268/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ica_sylvana',
  }
]
</script>

<template>
  <footer class="relative z-50 border-t border-borderLight bg-background">
    <div class="mx-auto max-w-6xl px-6 py-10 lg:px-10">
      <div class="flex w-full flex-col items-start gap-12 py-6 md:gap-16 lg:flex-row lg:justify-between">
        <!-- Left CTA -->
        <div class="flex max-w-md flex-col">
          <h6 class="font-['Newsreader'] text-3xl font-light leading-tight text-primaryText md:text-4xl lg:text-5xl">
            Let&apos;s create
            something <br/><span class="italic">timeless</span>
            together.
          </h6>

          <a
            href="mailto:atogbevi.wk@gmail.com"
            class="group mt-10 inline-flex items-center justify-between gap-4 border-b border-borderLight pb-4 text-primaryText hover:underline"
          >
            <span class="truncate">atogbevi.wk@gmail.com</span>
            <span class="inline-flex shrink-0 items-center transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <!-- Right columns (SITEMAP + SOCIALS) -->
        <div class="flex items-start justify-end gap-16">
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.3em] text-primaryText">
              Plan du site
            </p>
            <ul class="mt-6 space-y-3 text-sm text-primaryText">
              <li>
                <button type="button" class="transition-colors hover:underline" @click="goToService(1)">
                  Développement Web
                </button>
              </li>
              <li>
                <button type="button" class="transition-colors hover:underline" @click="goToService(2)">
                  Design Graphique
                </button>
              </li>
              <li>
                <button type="button" class="transition-colors hover:underline" @click="goToService(3)">
                  Data Analyse
                </button>
              </li>
              <li>
                <button type="button" class="transition-colors hover:underline" @click="goToService(4)">
                  Photographie
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-medium uppercase tracking-[0.3em] text-primaryText">
              Réseaux
            </p>
            <ul class="mt-6 space-y-3 text-sm text-primaryText">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.url" target="_blank" rel="noopener noreferrer">
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom line -->
      <div class="mt-16 flex items-end justify-between gap-6 border-t border-borderLight pt-8">
        <p class="text-sm text-primaryText">
          © {{ new Date().getFullYear() }} Alva Studio. Independent.
        </p>
        <p class="inline-flex text-sm text-primaryText">
          Made with Love and Precision.
        </p>
      </div>
    </div>
  </footer>
</template>