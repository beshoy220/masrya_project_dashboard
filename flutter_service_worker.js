'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "875c73548f60165f1d38e595601f654f",
"assets/AssetManifest.bin.json": "6b340229b63fd2c2efe70e17a7a9cd32",
"assets/AssetManifest.json": "559c580fa7669a8be4caf4cf301802ad",
"assets/assets/app_bar_bg%2520copy.png": "64961d3044dc9c5fc7b9c14f91505a72",
"assets/assets/app_bar_bg.png": "64961d3044dc9c5fc7b9c14f91505a72",
"assets/assets/footer_bg.png": "5d23f21ba43d30e5b3f13cc00b0f0fc1",
"assets/assets/footer_logo.png": "b54611db5c4b5975f78ad625b21dd537",
"assets/assets/items/0-0.jpg": "286a2ac100b031bfbdc7b2b05ee3f619",
"assets/assets/items/0-1.jpg": "86123196fdc3640b2b2f6d2727e9a122",
"assets/assets/items/0-2.jpg": "07632c471ebf62475fd3ccff9ce9a255",
"assets/assets/items/0-3.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/0-4.jpg": "8c338e37a48465128a8d017c93945566",
"assets/assets/items/1-0.jpg": "6eca7485580a5062379d5cee99979589",
"assets/assets/items/1-1.jpg": "8989b6b0f8f97b67e2c3b52d9f8ba6ab",
"assets/assets/items/1-2.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/10-0.gif": "9667cfcadf43e971b9e154f84f9d2321",
"assets/assets/items/10-1.jpg": "a02a0b2e27a21d28c5671b86bcff8db8",
"assets/assets/items/10-2.gif": "3012e768b5c03c2f56269163811aa578",
"assets/assets/items/11-0.jpg": "b5d31ff4daeef39c4f1050c9a88129b6",
"assets/assets/items/11-1.jpg": "b5d31ff4daeef39c4f1050c9a88129b6",
"assets/assets/items/12-0.jpg": "4907be4ea6abcdadbf41f308bf3d4dd2",
"assets/assets/items/12-1.jpg": "242e890b858945ebda9aee0c18b5e7ec",
"assets/assets/items/13-0.png": "2b158d288b85384c900ef98d4d795d62",
"assets/assets/items/13-1.jpg": "961e3bd4beeab4b767c61673dcd2272a",
"assets/assets/items/13-2.jpg": "6e86b7e18a9ccc2775dbfaf16ea1e0ab",
"assets/assets/items/2-0.jpg": "35c478bc45e876bd4d9c0f2ab4260535",
"assets/assets/items/2-1.jpg": "e2926a86f5cc20a4f803c9415ba9394c",
"assets/assets/items/2-2.jpg": "0df909c5a51d2a3d99dbbe94c23ba228",
"assets/assets/items/2-3.jpg": "8048d88806542ce995ad9254383048c4",
"assets/assets/items/3-0.jpg": "e9e05cabb06c05903acacec3264d18de",
"assets/assets/items/3-1.jpg": "37b97f32cf26f7189f4cc56d8999f244",
"assets/assets/items/3-2.jpg": "b3b85aed35a3a067607c84487e0e0243",
"assets/assets/items/3-3.jpg": "bff20aee04478e08269de5145f2c47c9",
"assets/assets/items/4-0.jpg": "e8ac9ebb1425ba473b68ab629088dad6",
"assets/assets/items/4-1.jpg": "4d59b6ad739e9855814e288950bcfe05",
"assets/assets/items/4-2.gif": "94fc4504c746bddc92af99fc1ce4d740",
"assets/assets/items/5-0.jpg": "f578f1064f8a665a4c10940a559ff3d8",
"assets/assets/items/5-1.gif": "d7140eda1ff5f8400afe3b51e4ca698d",
"assets/assets/items/6-0.jpg": "91ec5c661e8221e2535fc8df4016df17",
"assets/assets/items/6-1.gif": "d95af074f564a7385e20bdde6f65b23d",
"assets/assets/items/7-0.jpg": "a402eeeb47418e052c62cfeed9be39d7",
"assets/assets/items/7-1.gif": "732b03bf6aad4804da5c05dbd7079e4a",
"assets/assets/items/8-0.jpg": "9963905dd33ee1173f7e3036e7b1e46f",
"assets/assets/items/8-1.jpg": "9963905dd33ee1173f7e3036e7b1e46f",
"assets/assets/items/9-0.jpg": "bbb46df3261bbaaee0f71c2df94fdfa1",
"assets/assets/items/9-1.jpg": "bbb46df3261bbaaee0f71c2df94fdfa1",
"assets/assets/logo.png": "7b18332a4352162dcfd8f34995e1fc7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "20163497b7c66158b7d6c206a21d2528",
"assets/NOTICES": "7bb99d84016512624f010de32e98d648",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3d4425ba8db1db01582bcfdd88cfb479",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1950a3bcd733b1ae7d3f5018c1770401",
"/": "1950a3bcd733b1ae7d3f5018c1770401",
"main.dart.js": "6361eca335cb354f6166f9ee1d68cec0",
"manifest.json": "8abbfeb78c8eec3bd8f54e3f13d45f30",
"version.json": "b5e388f99d1f6d18f3573e4405173ddf"};
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
