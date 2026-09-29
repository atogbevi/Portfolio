/**
 * Syncs header background/text with the active service panel (index + layout Header).
 * default, design, photo: light bar. web, data: dark bar.
 */
export type HeaderSurface = 'default' | 'web' | 'design' | 'photo' | 'data'

export function useHeaderSurface() {
  return useState<HeaderSurface>('headerSurface', () => 'default')
}
