/**
 * Syncs header background/text with the active service panel (index + layout Header).
 * 'web' = dark panel, 'design' = stone-200, 'photo' / 'default' = page background.
 */
export type HeaderSurface = 'default' | 'web' | 'design' | 'photo'

export function useHeaderSurface() {
  return useState<HeaderSurface>('headerSurface', () => 'default')
}
