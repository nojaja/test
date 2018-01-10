(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.ws = mod.exports;
  }
})(this, function () {
  "use strict";

  self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (_response) {
        console.log("fetch:" + event.request.url);
        return _response;
      });
    }));
  });

  /*
  const STATIC_CACHE_KEY = '1';
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(function(_response) {
          console.log("cache.put:"+event.request.url);
          caches.open(STATIC_CACHE_KEY).then(function(cache) {
            console.log("_response:"+_response);
            cache.put(event.request, _response.clone());
          });
          return _response;
        });
      })
    );
  });
  */
});
