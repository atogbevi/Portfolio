<script setup>
import { nextTick, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { publicAsset } from '~/utils/publicAsset'

defineProps({
  active: Boolean,
})

defineEmits(['close'])

const images = [
  { id: 1, src: '/images/photos/photo1.jpg' },
  { id: 2, src: '/images/photos/photo2.jpg' },
  { id: 3, src: '/images/photos/photo3.jpg' },
  { id: 4, src: '/images/photos/photo4.jpg' },
  { id: 5, src: '/images/photos/photo5.jpg' },
  { id: 6, src: '/images/photos/photo6.jpg' },
  { id: 7, src: '/images/photos/photo7.png' },
  { id: 8, src: '/images/photos/photo8.jpg' },
  { id: 9, src: '/images/photos/photo9.jpg' },
  { id: 10, src: '/images/photos/photo10.jpg' },
  { id: 11, src: '/images/photos/photo11.jpg' },
  { id: 12, src: '/images/photos/photo12.jpg' },
  { id: 13, src: '/images/photos/photo13.jpg' },
].map(image => ({ ...image, src: publicAsset(image.src) }))

const dialog = ref(null)
const closeButton = ref(null)
const opener = ref(null)
const current = ref(null)

function openImage(image, event) {
  current.value = image
  opener.value = event.currentTarget
  nextTick(() => {
    dialog.value?.showModal()
    closeButton.value?.focus()
  })
}

function closeImage() {
  dialog.value?.close()
}

function onDialogClose() {
  const trigger = opener.value
  current.value = null
  opener.value = null
  trigger?.focus()
}
</script>

<template>
  <section
    role="dialog"
    aria-modal="true"
    aria-labelledby="photo-panel-title"
    class="fixed inset-0 z-40 overflow-y-auto bg-background transition-transform duration-[var(--panel-duration)] ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="active ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="fixed inset-0 flex flex-col px-8 py-32 lg:px-0">
      <button
        type="button"
        data-panel-close
        aria-label="Fermer"
        class="absolute right-6 top-20 text-primaryText transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accentInk"
        @click="$emit('close')"
      >
        <Icon icon="mdi:close" class="size-8" />
      </button>

      <div class="mx-auto flex w-full flex-col items-center gap-4 lg:w-1/2">
        <Icon icon="mdi-light:camera" class="size-10 text-primaryText" />
        <h3 id="photo-panel-title" class="text-2xl text-primaryText md:text-3xl lg:text-4xl">Styliser la vie</h3>
        <p class="text-center text-xl text-primaryText">
          Observer les moments de calme dans un monde bruyant. Ma photographie se concentre sur l'architecture, les textures et la lumière naturelle, cherchant à extraire l'essence d'un sujet sans artifice.
        </p>
      </div>

      <div class="mx-auto columns-1 gap-4 space-y-4 pt-32 sm:columns-2 lg:w-4/5 lg:columns-3">
        <figure
          v-for="image in images"
          :key="image.id"
          class="break-inside-avoid"
        >
          <button
            type="button"
            class="block w-full"
            :aria-label="image.caption || `Agrandir la photographie ${image.id}`"
            @click="openImage(image, $event)"
          >
            <img
              :src="image.src"
              alt=""
              class="w-full rounded-radius grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:grayscale-0"
            />
          </button>
          <figcaption
            v-if="image.caption"
            class="mt-2 text-sm text-primaryText"
          >
            {{ image.caption }}
          </figcaption>
        </figure>
      </div>
    </div>

    <Teleport to="body">
    <dialog
      ref="dialog"
      class="w-[min(100%-2rem,960px)] rounded-radius border border-borderStrong bg-background p-4 text-primaryText backdrop:bg-surfaceDark"
      @close="onDialogClose"
    >
      <button
        ref="closeButton"
        type="button"
        class="mb-4 text-sm text-primaryText hover:text-accentInk"
        @click="closeImage"
      >
        Fermer
      </button>
      <img
        v-if="current"
        :src="current.src"
        alt=""
        class="w-full rounded-radius"
      />
      <p v-if="current?.caption" class="mt-3 text-sm text-primaryText">
        {{ current.caption }}
      </p>
    </dialog>
    </Teleport>
  </section>
</template>
