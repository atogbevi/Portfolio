import { nextTick } from 'vue'

export const PANEL_DURATION_MS = 700

let opener: HTMLElement | null = null

export function useServicePanel() {
  const activeService = useState<number | null>('activeService', () => null)
  const serviceOpen = useState<boolean>('serviceOpen', () => false)

  const openService = (id: number) => {
    if (import.meta.client) {
      const current = document.activeElement
      opener = current instanceof HTMLElement ? current : null
    }
    activeService.value = id
    requestAnimationFrame(() => {
      serviceOpen.value = true
    })
  }

  const closeService = () => {
    const id = activeService.value
    const target = opener
    opener = null
    serviceOpen.value = false
    if (import.meta.client) {
      nextTick(() => {
        if (target && document.contains(target)) {
          target.focus()
          return
        }
        if (id != null) {
          document.querySelector<HTMLElement>(`[data-service-id="${id}"]`)?.focus()
        }
      })
    }
    setTimeout(() => {
      activeService.value = null
    }, PANEL_DURATION_MS)
  }

  return { activeService, serviceOpen, openService, closeService }
}
