import { useRuntimeConfig } from '#imports'

/**
 * Prefixes a public/ path with app.baseURL.
 * Static template attributes such as src="/images/..." are rewritten the same way at build time.
 */
export function publicAsset(path: string) {
  const base = useRuntimeConfig().app.baseURL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${path.replace(/^\/+/, '')}`
}
