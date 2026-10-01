import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
 
    // Convierte la app en PWA (Progressive Web App):
    // - Genera el service worker automaticamente (offline + cache).
    // - Genera/injecta el manifest.webmanifest (icono, nombre, colores).
    // registerType: 'autoUpdate' hace que el service worker se actualice
    // solo cuando hay una nueva version, sin que el usuario tenga que hacer nada.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Aplicación de Peliculas',
        short_name: 'Películas',
        description: 'Aplicación para clasificar tus películas',
        theme_color: '#ff763b',
        background_color: '#ffffff',
        display: 'standalone', // se abre como app, sin la barra del navegador
        start_url: '/',
        icons: [
          {
            src: 'peliculas-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'peliculas-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'peliculas-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // version que se adapta a iconos redondos/cuadrados en Android
          },
        ],
      },
      workbox: {
        // Cachea automaticamente todo lo que Vite genera en el build (JS, CSS, HTML, imagenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
 
