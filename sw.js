const CACHE_NAME = 'ruang-saa-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through request ke Google Apps Script
  event.respondWith(fetch(event.request));
});