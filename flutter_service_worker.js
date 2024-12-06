'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "6311fd3f9bb7eea3b03faa5cbba86579",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d44ae5eb698f9cc7d9e499c9a144e97d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1966864e7654882367dfa2cf299fec1a",
".git/logs/refs/heads/main": "294ee99b77b2faa0b331420734f8a273",
".git/logs/refs/remotes/origin/main": "056d306ab2f751fc1ac0cd8984dee5f3",
".git/objects/03/e1b7abd5f533f0c60ea3fa2b2c4baedc1b0793": "eae63e06794a06d928be923758d0f95f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/13/33b6a625289d98b592195b32a60aa1a22b4c78": "70469b86adf9caa0cfd43edbca3f7722",
".git/objects/15/def74602803f18d4286af46b782c1e095f7d30": "a37c217e4111fac3b403bf2b88f8d5e8",
".git/objects/19/a428805ad2c23a65a4fcaa3c63d230646c199b": "64ec77bac372ef585a9e9ad2e36c7f83",
".git/objects/1a/865bf059f7d5cca8d2b0fac3c39dab5522a3fc": "23fe23957d1ba3ecb834966e5a3537c4",
".git/objects/1c/3862227c38761a3cc975d4de6f407a17b264c2": "bf75875e8a2e8e8fb240735d83327c9f",
".git/objects/1d/fb714399e441d5d0779651eb728b5a0f80a500": "e6e0f9672ccdd19aca624385660ca643",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/462fd77a6f5c86cad9d0d5a10b276f2d7525a3": "3bcb34fa3e79424ab2e0a1f24484c7a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/a76216db810c76ce6858a643cdde1c606c5277": "f8439445cdfb5c4486c74d4430c2e40e",
".git/objects/2c/1da1dd8bcda211072be54a3c18ff6420a6a298": "7f74cd95f39414778cabcc2bdbdf6701",
".git/objects/2c/fa9a88657dfc1d7bd590017cbcce4ec0f818f0": "7f1127da9dcd6d459f86302e730bf14f",
".git/objects/2f/bd5e8eb3a44269738739f0e5e1aac8dd78333b": "ca483f3c960822b8a3a478030bb999cc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/3a84e25cdf39f63659d439c62f4c8c8cbda301": "64dd2941c60c61709fe43e5624e40f57",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/12f4f4b71cc33c7262dd86d49f1f8cc5b5d606": "384a706388a54be4fb83529736519e2b",
".git/objects/80/c3da6fb030d968a1ff828750e97374fa7559fc": "23c43ee25ba15812a068852f44f97703",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/811641081f07a11a98bcd9924b46daad9ce30a": "d4de6f59027711d60206af3129561ec5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/82b9febea595763a5af292bfb06ae0858b03f5": "f8365b8cd4e6e80591f2317f44f704e1",
".git/objects/a3/b4c3ffe62502e01aee28c06f53ddf330017c10": "2b06780880440362f22a2f59602b15da",
".git/objects/a6/78a8a3a9e85c052ab374a1c7a7661445aaf721": "0ba3ae55971bd1acb3227567f1028880",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/37d0eb5198710fd8d82c59222e22f0795bcea9": "e477557098313e054ee434f2390a4ff5",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/51db58c07845a2de47289b3713cfe90a989eed": "515f42fe6b604b087918969eb633ae8c",
".git/objects/d8/b1e1080adbc65d7a98e9e0806a525cbe3d0c68": "56f9d376486dda6059477ea773ba9727",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e3/5c876b79c48bd9ef06ea1f20edb3758ba110d3": "3562585371c5137e1f51deeae9d1fdd7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/35c34091d30b19c55ac821db66ca7c99b86f39": "49ef3d83f3a0e94952c7e88cf618e916",
".git/objects/f8/243379a056e2a0caf3bec2c67205504fa343ae": "50d157e9661c887aa3e41778deca74a5",
".git/objects/fa/bf81d9509df18ae4c681425836247300ad6c80": "c9cbf446a0d86da18d41f7287bf33cef",
".git/objects/fd/2eddff4b4ee6c982a72c33b55b5596e079eac5": "a579af0cf930b8fd3cc2305cb00cd116",
".git/refs/heads/main": "80acedb469af3c0907dff23fc336afbf",
".git/refs/remotes/origin/main": "80acedb469af3c0907dff23fc336afbf",
"assets/AssetManifest.bin": "b1c02e04985aa4b6a1a0fbb95ec915f8",
"assets/AssetManifest.bin.json": "c2648272970970fa9a6124fcd9120d27",
"assets/AssetManifest.json": "c779b7136b1b4959314bbde62c423250",
"assets/assets/icons/giggbox.png": "7e5c408a32ebc32a30cbf125ee37526d",
"assets/assets/icons/giggbox2.png": "49010ff6f78a83d315f55100c6f6e311",
"assets/assets/icons/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/icons/youtube.png": "a1cc6d6c04cfd12be95b4d13cd881bfe",
"assets/assets/images/error404.png": "13d982a0c5611d736e3a627474bbd8b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "db5d1b9714353b8d54572d261f7cb6a0",
"assets/NOTICES": "9a680f7f08c6cd21ac661792f4f2e385",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "8cbcac9b47aba3021b0b81471c2ac170",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ed7c820835290d72cc4b6c96e4f5c26d",
"icons/Icon-192.png": "1f785881c8bed778e3e158f26a40f776",
"icons/Icon-512.png": "90732ddf9b9f60381ee2c78803aa1f83",
"icons/Icon-maskable-192.png": "1f785881c8bed778e3e158f26a40f776",
"icons/Icon-maskable-512.png": "90732ddf9b9f60381ee2c78803aa1f83",
"index.html": "daf15ef6cbfcf06768ad754698ba4542",
"/": "daf15ef6cbfcf06768ad754698ba4542",
"main.dart.js": "503efaa50002987e766761ad652f87c5",
"manifest.json": "d1d6f7c6ddc47348d65f6de5c11c1f23",
"version.json": "0d20534f64bb86029dbd2f4b5f53b4c3",
"_redirects": "d38a2b58df330c85e0029eecf71d7c26"};
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
