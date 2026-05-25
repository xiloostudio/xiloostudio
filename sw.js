const CACHE_NAME = 'xilofone-studio-versao-modificado'; // Atualizado para forçar os celulares a baixarem a nova versão
const ASSETS = [
  './',
  './index.html',
  './biblioteca.html',
  './musica.html',
  './style.css',
  './script.js',
  './manifest.json',
  './image_0e1532.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
