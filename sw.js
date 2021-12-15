const staticCache = "static-cache";
const dynamicCache = "dynamic-cache";
const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/bootstrap.min.js",
  "/js/contact.js",
  "/js/custom.js",
  "/js/imagesloaded.pkgd.min.js",
  "/js/infinite-scroll.min.js",
  "/js/isotope.pkgd.min.js",
  "/js/jquery.counterup.min.js",
  "/js/jquery.easing.min.js",
  "/js/jquery.mCustomScrollbar.concat.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery-1.12.3.min.js",
  "/js/popper.min.js",
  "/js/slick.min.js",
  "/js/validator.js",
  "/images/ajax-loader.gif",
  "/images/70x70.png",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
  "/images/images/apple-touch-icon.png",
  "/images/favicon.ico",
  "/images/favicon-16x16.png",
  "/images/touchicon-180.png",
  "/images/Nodejs_logo_light.png",
  "/images/mysql.jpg",
  "/images/images.png",
  "/images/bootstrap-social.png",
  "/fonts/glyphicons-halflings-regular.eot",
  "/fonts/glyphicons-halflings-regular.svg",
  "/fonts/glyphicons-halflings-regular.ttf",
  "/fonts/glyphicons-halflings-regular.woff",
  "/fonts/glyphicons-halflings-regular.woff2",
  "/fonts/Simple-Line-Icons.eot",
  "/fonts/Simple-Line-Icons.svg",
  "/fonts/Simple-Line-Icons.ttf",
  "/fonts/Simple-Line-Icons.woff",
  "/fonts/Simple-Line-Icons.woff2",
  "/fonts/slick.eot",
  "/fonts/slick.svg",
  "/fonts/slick.ttf",
  "/fonts/slick.woff",
  "/css/all.min.css",
  "/css/bootstrap.min.css",
  "/css/jquery.mCustomScrollbar.min.css",
  "/css/simple-line-icons.css",
  "/css/slick.css",
  "/css/style.scss",
  "/css/sass/base.scss",
  "/css/sass/buttons.scss",
  "/css/sass/elements.scss",
  "/css/sass/header.scss",
  "/css/sass/main.scss",
  "/css/sass/mixins.scss",
  "/css/sass/responsive.scss",
  "/css/sass/slick.scss",
  "/webfonts/fa-brands-400.eot",
  "/webfonts/fa-brands-400.svg",
  "/webfonts/fa-brands-400.ttf",
  "/webfonts/fa-brands-400.woff",
  "/webfonts/fa-brands-400.woff2",
  "/webfonts/fa-regular-400.eot",
  "/webfonts/fa-regular-400.svg",
  "/webfonts/fa-regular-400.ttf",
  "/webfonts/fa-regular-400.woff",
  "/webfonts/fa-regular-400.woff2",
  "/webfonts/fa-solid-900.eot",
  "/webfonts/fa-solid-900.svg",
  "/webfonts/fa-solid-900.ttf",
  "/webfonts/fa-solid-900.woff",
  "/webfonts/fa-solid-900.woff2",
];
const limitCacheSize = (name, size) => {
  console.log("limit cache size");
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      console.log(keys);
      if (keys.length > size) {
        console.log("delete");
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
const limitNumCache = (cacheName, num) => {
  caches.open(cacheName).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > num) {
        cache.delete(keys[0]).then(limitNumCache(cacheName, num));
      }
    });
  });
};
// const limitNumCache = (cacheName, num) => {
//     caches.open(cacheName).then(cache => {
//         cache.keys().then(keys => {
//             if (keys.length > num) {
//                 cache.delete(keys[0]).then(limitNumCache(cacheName, num));
//             }
//         })
//     })
// }
//install processs

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticCache).then((cache) => {
      cache.addAll(assets);
    })
  );
});

//activate
self.addEventListener("activate", (e) => {
  console.log("avtivate");
});

self.addEventListener("fetch", function (event) {
});
// self.addEventListener('fetch', e => {
//     e.respondWith(
//         caches.match(e.request).then(staticRes => {
//             return staticRes || fetch(e.request).then(dynamicRes => {
//                 return caches.open(dynamicCache).then(cache => {
//                     cache.put(e.request.url, dynamicRes.clone())
//                     return dynamicRes
//                 })
//             })
//         }).catch(() => caches.match('/pages/fallback.html'))
//     )
//
//
// })

// self.addEventListener('fetch', e => {
//     console.log('fetch events', e)
//     if (e.request.url.indexOf('firestore.googleapis.com') === -1) {
//         //if not making the request from google, then can do caching
//         e.respondWith(
//             caches.match(e.request).then(cacheRes => {
//                 return cacheRes || fetch(e.request).then(fetchRes => {
//                     return caches.open(dynamicCache).then(cache => {
//                         cache.put(e.request.url, fetchRes.clone());
//                         limitCacheSize(dynamicCache, 3)
//                         return fetchRes
//                     })
//                 })
//             }).catch(() => {
//                 if (e.request.url.indexOf('.html') > -1) {
//                     return caches.match('/pages/fallback.html');

//                 }

//             })
//         )
//     }

// })

// network first
// self.addEventListener('fetch', e => {

//     e.respondWith(
//         fetch(e.request).then(fetchRes => {
//             return caches.open(dynamicCache).then(cache => {
//                 cache.put(e.request.url, fetchRes.clone());
//                 return fetchRes
//             })
//         }).catch(function () {
//             return caches.match(e.request);
//         })
//     )

// })
// self.addEventListener('fetch', evt => {
//     evt.respondWith(
//         fetch(evt.request).then(fetchRes => {
//             return caches.open(dynamicCacheName).then(cache => {
//                 cache.put(evt.request.url, fetchRes.clone());
//                 return fetchRes
//             })
//         })
//             .catch(function () {
//                 console.log(evt.request, 'match', caches.match(evt.request));
//                 return caches.match(evt.request);
//             })
//     )

// })
//cache only
// self.addEventListener('fetch', e => {

//     e.respondWith(
//         caches.match(e.request)
//     )

// })
