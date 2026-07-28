/**
 * Prefetch de los chunks de ruta.
 *
 * Las paginas se cargan con React.lazy (ver App.tsx), asi que el chunk se pide
 * en el momento del click. Disparar el import en hover/focus del enlace hace que
 * la descarga se solape con la intencion del usuario y la navegacion resulte
 * instantanea. Cada import se memoriza: llamarlo varias veces no repite la peticion.
 */

const routeLoaders: Record<string, () => Promise<unknown>> = {
  '/groups': () => import('@/pages/Groups'),
  '/join': () => import('@/pages/Join'),
  '/contribute': () => import('@/pages/Contribute'),
  '/blog': () => import('@/pages/BlogIndex'),
  '/events': () => import('@/pages/Events'),
};

const prefetched = new Set<string>();

export function prefetchRoute(to: string): void {
  const path = to.split(/[?#]/)[0];
  if (prefetched.has(path)) return;

  // Las entradas de blog comparten un unico chunk (BlogPost).
  const loader = path.startsWith('/blog/') ? () => import('@/pages/BlogPost') : routeLoaders[path];
  if (!loader) return;

  prefetched.add(path);
  void loader().catch(() => {
    // Si falla el prefetch se reintenta en la navegacion real.
    prefetched.delete(path);
  });
}
