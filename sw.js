const CACHE_NAME = "tek-teker-egim-v1";
const APP_SHELL = ["./Untitled-2.html", "./manifest.json"];

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(APP_SHELL);
  }));
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    })
  );
});
