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
    url: 'https://www.linkedin.com/company/alva-studio/',
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
      <div class="flex flex-col items-start gap-12 py-6 lg:flex-row lg:gap-96">
        <!-- Left CTA -->
        <div class="flex max-w-md flex-col">
          <h6 class="font-['Newsreader'] text-3xl font-light leading-tight text-primaryText md:text-4xl lg:text-5xl">
            Let&apos;s create
            something <br/><span class="italic">timeless</span>
            together.
          </h6>

          <a
            href="mailto:atogbevi.wk@gmail.com"
            class="group mt-10 inline-flex items-center justify-between gap-4 border-b border-borderLight pb-4 text-primaryText transition-colors hover:text-secondaryText"
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
            <p class="text-xs font-medium uppercase tracking-[0.3em] text-secondaryText">
              SITEMAP
            </p>
            <ul class="mt-6 space-y-3 text-sm text-secondaryText">
              <li>
                <button type="button" class="transition-colors hover:text-primaryText" @click="goToService(1)">
                  Development
                </button>
              </li>
              <li>
                <button type="button" class="transition-colors hover:text-primaryText" @click="goToService(2)">
                  Design
                </button>
              </li>
              <li>
                <button type="button" class="transition-colors hover:text-primaryText" @click="goToService(3)">
                  Photography
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-medium uppercase tracking-[0.3em] text-secondaryText">
              SOCIALS
            </p>
            <ul class="mt-6 text-sm text-secondaryText space-y-3">
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
        <p class="text-sm text-secondaryText">
          © {{ new Date().getFullYear() }} Alva Studio. Independent.
        </p>
        <p class="text-sm text-secondaryText">
          Made with Love <Icon icon="mdi:heart-outline" /> and Precision.
        </p>
      </div>
    </div>
  </footer>
</template>