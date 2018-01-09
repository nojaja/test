self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      console.log(event);
      return response || fetch(event.request);
    })
  );
});