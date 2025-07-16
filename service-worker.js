
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("game-id-cache").then((cache) => {
      return cache.addAll([
        "/post.html",
        "/manifest.json",
        "/service-worker.js",
        "/icons/icon-192.png",
        "/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
