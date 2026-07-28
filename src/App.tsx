import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Landing from '@/pages/Landing';

// Landing se importa de forma estatica (es la ruta de entrada); el resto va en
// chunks separados para no cargar react-markdown ni las paginas secundarias
// en la primera visita.
const Groups = lazy(() => import('@/pages/Groups'));
const Join = lazy(() => import('@/pages/Join'));
const Contribute = lazy(() => import('@/pages/Contribute'));
const BlogIndex = lazy(() => import('@/pages/BlogIndex'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Events = lazy(() => import('@/pages/Events'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;
    const run = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    };
    requestAnimationFrame(run);
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToHash />
      {/*
        El fallback va vacio a proposito: las navegaciones internas pasan por
        startTransition (ver TransitionLink), asi que React mantiene la pantalla
        anterior mientras llega el chunk en vez de mostrar el fallback. Este solo
        aparece en una carga directa por URL de una ruta secundaria.
      */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
