'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f8ea9ac05fa5c58bdf750b09b6dd87b8",
"assets/AssetManifest.bin.json": "57b01e9fa0eabf73b1094a0a29c16c86",
"assets/AssetManifest.json": "85314f9b78d787d07ae6b6f7552ba981",
"assets/assets/coners_tables/female12_14.json": "71247515f0ca7845ecb6fc92393efb44",
"assets/assets/coners_tables/female15_17.json": "2584bdc9c525742a11190f8959cf8d8d",
"assets/assets/coners_tables/female3_5.json": "06ae11652aaa69213f4c7a7735589b70",
"assets/assets/coners_tables/female6_8.json": "8054fe8c51e2b47a8cce88f9637c3579",
"assets/assets/coners_tables/female9_11.json": "69d445dcd7976bb57835fba93bf21cb7",
"assets/assets/coners_tables/male12_14.json": "77e195e4348bb19491bfa68fdad5cc76",
"assets/assets/coners_tables/male15_17.json": "2584bdc9c525742a11190f8959cf8d8d",
"assets/assets/coners_tables/male3_5.json": "58d341023ada121d23757d93c59c2d30",
"assets/assets/coners_tables/male6_8.json": "aee6de1aa0f383fc491d8d3675299b5b",
"assets/assets/coners_tables/male9_11.json": "9c9cf0c2afec0fc6a558c2d0b2fe54d0",
"assets/assets/images/home/logo_text.png": "01fab2e6921c833572bae76e1dc449da",
"assets/assets/images/home/offer.jpg": "434474aa43bdfbe1af4a32e540940d61",
"assets/assets/images/home/test1.jpg": "26e5b930737cf2ab7feae2489d685f65",
"assets/assets/images/home/test2.jpg": "6fe6a241c2d20c8b73d5b0cf6cf5a26c",
"assets/assets/images/home/test3.jpg": "34122de4ee5c08eb2b17681447938d01",
"assets/assets/images/home/test4.jpg": "c00aeb5a356512715e92ac741f146004",
"assets/assets/images/home/test5.jpg": "abae2b9859db4a42f29bbf5427517894",
"assets/assets/images/home/test6.jpg": "944bdcd60d18ea12be6624dd0dd67dcb",
"assets/assets/images/home/test6.webp": "de971da15393fa63441d58d8bcad36a8",
"assets/assets/images/home/test7.jpg": "76dc45eaf573a543fa15d7d3d2761fde",
"assets/assets/images/home/test8.webp": "e8f83650bf629f4c318a0900f7f7b38d",
"assets/assets/images/home/test9.jpg": "42776d4f3e524c7c92b824ab69cb3089",
"assets/assets/images/launch.png": "0f6037a4b6c6fd867b015554d87acf28",
"assets/assets/images/logo.png": "87f38ea2d290a66c64af48e01b2c2def",
"assets/assets/images/placeholder.png": "61d706297245593d4adf5cc08eca4683",
"assets/assets/images/splash.png": "0f6037a4b6c6fd867b015554d87acf28",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f036b5069c4b98c047d9ef1977c00f56",
"assets/NOTICES": "72b7655a4ed894e10f8c565ae9074178",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4807f84ff9506005c8948a25690ca45a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "75a9c8db16fe6cf303563a38bcca7742",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15f63b99b20ccc2dce493854c67a5452",
"/": "15f63b99b20ccc2dce493854c67a5452",
"main.dart.js": "f3a97cd629b26dc185b580fe7296ffca",
"manifest.json": "d51f4c065fc37ba417c9f9ab78d4faaf",
"version.json": "3f8f5a7c1c5cce3fc9efdd69c3757583"};
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
