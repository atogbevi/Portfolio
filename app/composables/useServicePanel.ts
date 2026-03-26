export function useServicePanel() {
  const activeService = useState<number | null>('activeService', () => null)
  const serviceOpen = useState<boolean>('serviceOpen', () => false)

  const openService = (id: number) => {
    activeService.value = id
    requestAnimationFrame(() => {
      serviceOpen.value = true
    })
  }

  const closeService = () => {
    serviceOpen.value = false
    setTimeout(() => {
      activeService.value = null
    }, 700)
  }

  return { activeService, serviceOpen, openService, closeService }
}

