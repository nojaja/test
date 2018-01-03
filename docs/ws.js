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
  'use strict';

  self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }));
  });
});
