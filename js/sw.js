// This is a simple service worker that will cache all resources
// so that it works offline

const CACHE_NAME = 'GeoAi-cache-v1';
const urlsToCache = [
  'https://george-khalil29.github.io/GeoAi/',
  'index.html' // Update with your actual HTML file name if different
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
