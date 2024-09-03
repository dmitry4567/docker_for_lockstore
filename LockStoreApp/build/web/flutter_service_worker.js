'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "39e8ac4045948db8a1d4a0e54e032647",
"version.json": "e1b3ec6ef52abf788dbae26105788950",
"index.html": "50de7bff19e5f73b2acb8123b794d6ea",
"/": "50de7bff19e5f73b2acb8123b794d6ea",
"main.dart.js": "cb7668c92e3cc718ae92904ad95d45dd",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1689ae556348a519a99446179a915bea",
"assets/AssetManifest.json": "41beefd215561892472d2f292ac8c6d5",
"assets/NOTICES": "80823d8612b6e4ca716616c02da91522",
"assets/FontManifest.json": "2ebdf9bd0323205b69a9afaccc80f664",
"assets/AssetManifest.bin.json": "c6ee5d75b6754bd210c8ff42e4ef97ea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "35db248e4acd2c7227e3f66e35b1c424",
"assets/fonts/MaterialIcons-Regular.otf": "777af9bbde74b1a84b1e08cd1a1588c9",
"assets/assets/images/lock5.png": "a70f3e6382f091e7b38cd9d8967d5b16",
"assets/assets/images/lock4.png": "09d92ef264a16492ff9f5c00725e0481",
"assets/assets/images/lock1.jpg": "e42126b8a521a45e9708d2e987720397",
"assets/assets/images/lock3.png": "869c8054fa8afb98ea8ee90e0ba66a06",
"assets/assets/images/lock2.png": "0d7c6a9ab19ff57355063edfc68db247",
"assets/assets/icons/like.svg": "a0bdd243dda5d6ba9f2d52937455649c",
"assets/assets/icons/productReturn.svg": "400fe70c23a2108e5682e2bb8d994f5f",
"assets/assets/icons/shop.svg": "eeec578528fa3d1911821d1923d5911d",
"assets/assets/icons/arrow_left.svg": "df1d6660c137b19841fdcec7bad0e331",
"assets/assets/icons/heart_pressed.svg": "1aaee519bba88243a6ef62801c581eb9",
"assets/assets/icons/arrow_right.svg": "1a791a03df9e018c9e032a6f940538ff",
"assets/assets/icons/plus.svg": "b40c37818518f4ce71f3e5a1700850e5",
"assets/assets/icons/box.svg": "400fe70c23a2108e5682e2bb8d994f5f",
"assets/assets/icons/phone.svg": "0ab2de54525dde594aba14e51a6a83a7",
"assets/assets/icons/star_fill.svg": "b61ac7d87485f4779719683d667f4493",
"assets/assets/icons/Logo.svg": "3b8d9453f4b57de14263fa4d0bb4d774",
"assets/assets/icons/menu.svg": "326bce6229420c7592181f088956eb02",
"assets/assets/icons/minus.svg": "cad6ebb86f8b2f6e7ff0b9901d8904ce",
"assets/assets/icons/star_unfill.svg": "3573e03a5ae5bcf92b6810b0d720218b",
"assets/assets/icons/heart.svg": "fe5456cb02e340cfe93c2f4e46dfc20b",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "ac5237052941a94686167d278e1c1c9d",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "e6ef4ea3cf5b1b533a85a5591534e3e4",
"assets/assets/fonts/RobotoFlex-Regular.ttf": "c1f174f3148d4539d0a8d41206cbdbf7",
"assets/assets/fonts/RobotoSerif-Regular.ttf": "2fde5a4a0cef2c19b4b6a30763322847",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
