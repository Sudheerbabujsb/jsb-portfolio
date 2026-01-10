self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("justus-cache").then(cache =>
      cache.addAll([
        "/",
        "/chat.html",
        "/manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});