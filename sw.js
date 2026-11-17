// Generated at build time by vite.config.ts. Do not edit.
const CACHE = "print-pricer-fbb4dc5a4957"
const FILES = ["./","./assets/_virtual_third-party-notices-Cq3IF9hB.js","./assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff","./assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2","./assets/ibm-plex-mono-latin-500-normal-CB9ihrfo.woff","./assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2","./assets/ibm-plex-mono-latin-600-normal-BgSNZQsw.woff2","./assets/ibm-plex-mono-latin-600-normal-DWFSQ4vo.woff","./assets/ibm-plex-sans-latin-400-normal-CDDApCn2.woff2","./assets/ibm-plex-sans-latin-400-normal-CYLoc0-x.woff","./assets/ibm-plex-sans-latin-500-normal-6ng42L7E.woff2","./assets/ibm-plex-sans-latin-500-normal-BgVn5rGT.woff","./assets/ibm-plex-sans-latin-600-normal-Cu4Hd6ag.woff","./assets/ibm-plex-sans-latin-600-normal-CuJfVYMP.woff2","./assets/ibm-plex-sans-latin-700-normal-Bth3BMcD.woff","./assets/ibm-plex-sans-latin-700-normal-Bxkt5Cjx.woff2","./assets/index-CCEr4_uj.js","./assets/index-atmU57Y4.css","./assets/web--BdRB4kT.js","./assets/web-OqdkukLu.js","./favicon.png","./icon-192.png","./icon-512.png","./manifest.webmanifest"]

self.addEventListener('install', (event) => {
  // 'reload' skips the browser's own HTTP cache, so a fresh install never stores a stale copy of a file the host cached.
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES.map((file) => new Request(file, { cache: 'reload' })))))
  // A new version does not take over here: it waits until the page says so (src/updates.ts),
  // so an open session is never switched to new files part of the way through.
})

self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name)))),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return
  if (request.mode === 'navigate') {
    // Pages: try the network first so updates arrive, fall back to the saved copy offline.
    event.respondWith(fetch(request).catch(() => caches.match('./')))
    return
  }
  // Everything else has a content hash in its name, so the saved copy is always right.
  event.respondWith(caches.match(request).then((hit) => hit || fetch(request)))
})
