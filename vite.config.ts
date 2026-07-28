import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Inyecta un <link rel="preload"> para el subset latin de JetBrains Mono.
 *
 * La fuente se declara dentro del CSS, asi que el navegador solo la descubre
 * despues de descargar y parsear la hoja de estilos. Precargarla desde el HTML
 * adelanta esa peticion y evita el salto de texto al aplicar la tipografia.
 * El nombre del archivo lleva hash, por eso se resuelve desde el bundle.
 */
function preloadLatinFont(): Plugin {
  return {
    name: 'preload-latin-font',
    apply: 'build',
    enforce: 'post',
    // El nombre del woff2 lleva hash y solo se conoce al emitir el bundle, que
    // ocurre despues de transformIndexHtml: por eso el HTML se edita aqui.
    generateBundle(_options, bundle) {
      const font = Object.keys(bundle).find((file) => /jetbrains-mono-latin-wght-normal-[^/]*\.woff2$/.test(file));
      if (!font) return;

      const html = bundle['index.html'];
      if (!html || html.type !== 'asset' || typeof html.source !== 'string') return;

      const link = `<link rel="preload" as="font" type="font/woff2" href="/${font}" crossorigin>`;
      html.source = html.source.replace('</head>', `  ${link}\n  </head>`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadLatinFont()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // El runtime de React cambia mucho menos que el codigo de la app: aislarlo
    // en su propio chunk mantiene ese cache valido entre despliegues.
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
          ],
        },
      },
    },
  },
});
