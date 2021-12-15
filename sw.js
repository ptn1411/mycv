const staticCache = "static-cache";
const dynamicCache = "dynamic-cache";
const assets = [
    "/",
    "https://ptn1411.github.io/mycv/",
    "https://ptn1411.github.io/mycv/index.html",
    "https://ptn1411.github.io/mycv/js/app.js",
    "https://ptn1411.github.io/mycv/js/bootstrap.min.js",
    "https://ptn1411.github.io/mycv/js/contact.js",
    "https://ptn1411.github.io/mycv/js/custom.js",
    "https://ptn1411.github.io/mycv/js/imagesloaded.pkgd.min.js",
    "https://ptn1411.github.io/mycv/js/infinite-scroll.min.js",
    "https://ptn1411.github.io/mycv/js/isotope.pkgd.min.js",
    "https://ptn1411.github.io/mycv/js/jquery.counterup.min.js",
    "https://ptn1411.github.io/mycv/js/jquery.easing.min.js",
    "https://ptn1411.github.io/mycv/js/jquery.mCustomScrollbar.concat.min.js",
    "https://ptn1411.github.io/mycv/js/jquery.waypoints.min.js",
    "https://ptn1411.github.io/mycv/js/jquery-1.12.3.min.js",
    "https://ptn1411.github.io/mycv/js/popper.min.js",
    "https://ptn1411.github.io/mycv/js/slick.min.js",
    "https://ptn1411.github.io/mycv/js/validator.js",
    "https://ptn1411.github.io/mycv/images/ajax-loader.gif",
    "https://ptn1411.github.io/mycv/images/70x70.png",
    "https://ptn1411.github.io/mycv/images/android-chrome-192x192.png",
    "https://ptn1411.github.io/mycv/images/android-chrome-512x512.png",
    "https://ptn1411.github.io/mycv/images/images/apple-touch-icon.png",
    "https://ptn1411.github.io/mycv/images/favicon.ico",
    "https://ptn1411.github.io/mycv/images/favicon-16x16.png",
    "https://ptn1411.github.io/mycv/images/touchicon-180.png",
    "https://ptn1411.github.io/mycv/images/Nodejs_logo_light.png",
    "https://ptn1411.github.io/mycv/images/mysql.jpg",
    "https://ptn1411.github.io/mycv/images/images.png",
    "https://ptn1411.github.io/mycv/images/bootstrap-social.png",
    "https://ptn1411.github.io/mycv/fonts/glyphicons-halflings-regular.eot",
    "https://ptn1411.github.io/mycv/fonts/glyphicons-halflings-regular.svg",
    "https://ptn1411.github.io/mycv/fonts/glyphicons-halflings-regular.ttf",
    "https://ptn1411.github.io/mycv/fonts/glyphicons-halflings-regular.woff",
    "https://ptn1411.github.io/mycv/fonts/glyphicons-halflings-regular.woff2",
    "https://ptn1411.github.io/mycv/fonts/Simple-Line-Icons.eot",
    "https://ptn1411.github.io/mycv/fonts/Simple-Line-Icons.svg",
    "https://ptn1411.github.io/mycv/fonts/Simple-Line-Icons.ttf",
    "https://ptn1411.github.io/mycv/fonts/Simple-Line-Icons.woff",
    "https://ptn1411.github.io/mycv/fonts/Simple-Line-Icons.woff2",
    "https://ptn1411.github.io/mycv/fonts/slick.eot",
    "https://ptn1411.github.io/mycv/fonts/slick.svg",
    "https://ptn1411.github.io/mycv/fonts/slick.ttf",
    "https://ptn1411.github.io/mycv/fonts/slick.woff",
    "https://ptn1411.github.io/mycv/css/all.min.css",
    "https://ptn1411.github.io/mycv/css/bootstrap.min.css",
    "https://ptn1411.github.io/mycv/css/jquery.mCustomScrollbar.min.css",
    "https://ptn1411.github.io/mycv/css/simple-line-icons.css",
    "https://ptn1411.github.io/mycv/css/slick.css",
    "https://ptn1411.github.io/mycv/css/style.scss",
    "https://ptn1411.github.io/mycv/css/sass/base.scss",
    "https://ptn1411.github.io/mycv/css/sass/buttons.scss",
    "https://ptn1411.github.io/mycv/css/sass/elements.scss",
    "https://ptn1411.github.io/mycv/css/sass/header.scss",
    "https://ptn1411.github.io/mycv/css/sass/main.scss",
    "https://ptn1411.github.io/mycv/css/sass/mixins.scss",
    "https://ptn1411.github.io/mycv/css/sass/responsive.scss",
    "https://ptn1411.github.io/mycv/css/sass/slick.scss",
    "https://ptn1411.github.io/mycv/webfonts/fa-brands-400.eot",
    "https://ptn1411.github.io/mycv/webfonts/fa-brands-400.svg",
    "https://ptn1411.github.io/mycv/webfonts/fa-brands-400.ttf",
    "https://ptn1411.github.io/mycv/webfonts/fa-brands-400.woff",
    "https://ptn1411.github.io/mycv/webfonts/fa-brands-400.woff2",
    "https://ptn1411.github.io/mycv/webfonts/fa-regular-400.eot",
    "https://ptn1411.github.io/mycv/webfonts/fa-regular-400.svg",
    "https://ptn1411.github.io/mycv/webfonts/fa-regular-400.ttf",
    "https://ptn1411.github.io/mycv/webfonts/fa-regular-400.woff",
    "https://ptn1411.github.io/mycv/webfonts/fa-regular-400.woff2",
    "https://ptn1411.github.io/mycv/webfonts/fa-solid-900.eot",
    "https://ptn1411.github.io/mycv/webfonts/fa-solid-900.svg",
    "https://ptn1411.github.io/mycv/webfonts/fa-solid-900.ttf",
    "https://ptn1411.github.io/mycv/webfonts/fa-solid-900.woff",
    "https://ptn1411.github.io/mycv/webfonts/fa-solid-900.woff2",
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
