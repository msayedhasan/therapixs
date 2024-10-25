'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "00209da72991be0c99ceb12c19af7d6e",
"assets/AssetManifest.bin.json": "6d86aae1862bdc2999203a805f469a9c",
"assets/AssetManifest.json": "750d28eff7ad6e2138bdf39832200a9e",
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
"assets/assets/fonts/Amiri-Bold.ttf": "4579323186687979ed908712b75f8fde",
"assets/assets/fonts/Amiri-Regular.ttf": "a0eaf4f9024ba05c091e59d5eaccccee",
"assets/assets/fonts/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/fonts/Cairo-Regular.ttf": "860e837f8b536c2c9f1d7fb9650b15eb",
"assets/assets/fonts/NotoSansArabic-Regular.ttf": "75527903c6a793772b02807c5343f4c8",
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
"assets/assets/images/logo-transparent.png": "aa28cb4d5b54358959c7f9538f82e13e",
"assets/assets/images/logo.jpg": "68f3a12a1ecf903f27fc4a56e139c785",
"assets/assets/images/logo.png": "87f38ea2d290a66c64af48e01b2c2def",
"assets/assets/images/placeholder.png": "61d706297245593d4adf5cc08eca4683",
"assets/assets/images/splash.png": "0f6037a4b6c6fd867b015554d87acf28",
"assets/assets/images/welcome/image1.webp": "a805c5cb8e242e1660fd11fb925ca469",
"assets/assets/images/welcome/image2.jpg": "adce9ba4036dc05d56b45c7efecb1569",
"assets/assets/images/welcome/image3.jpeg": "7a073bbd3bf46bd7c436c32561db9a93",
"assets/assets/images/welcome/image4.webp": "b57dac1377e901a7816cc9f6397e7dd3",
"assets/assets/images/welcome/time.jpg": "e01d09bdc59c575dad48518c14dcb39c",
"assets/assets/images/welcome/time2.jpg": "e63e192b8b3ade6dd84631375da2bdd6",
"assets/FontManifest.json": "a4466970cb08404f9f8a0492f86d7aba",
"assets/fonts/MaterialIcons-Regular.otf": "0bf871ce9e4ea4583176ad7d418e9721",
"assets/NOTICES": "78af083111b3ed796890c3bd6e03386e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4807f84ff9506005c8948a25690ca45a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c709b3b0ad0cbeb2f3e75ae081fe76da",
"/": "c709b3b0ad0cbeb2f3e75ae081fe76da",
"main.dart.js": "b8246ca2f6f5e8d2a4419e240eb38b84",
"manifest.json": "d51f4c065fc37ba417c9f9ab78d4faaf",
"version.json": "3f8f5a7c1c5cce3fc9efdd69c3757583"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
