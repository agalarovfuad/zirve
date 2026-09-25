// Zirvə — oflayn keş. Əsas fayllar quraşdırılanda keşlənir; səslər ilk dəfə çalınanda keşə düşür
// və ya "Səsləri oflayn yüklə" ilə hamısı bir dəfəyə yüklənir.
const VER = 'zirve-v4';
const CORE = ['./', 'index.html', 'words.js', 'texts.js', 'syllabus.js', 'speak.js', 'lemma.js', 'exams.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VER).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER && k !== 'zirve-audio').map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.pathname.includes('/audio/')) {
    e.respondWith(caches.open('zirve-audio').then(async c => { const hit = await c.match(e.request); if (hit) return hit; const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }));
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(r => { if (r.ok) caches.open(VER).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request).then(h => h || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(h => h || fetch(e.request).then(r => { if (r.ok && (url.hostname.includes('gstatic') || url.hostname.includes('googleapis'))) caches.open(VER).then(c => c.put(e.request, r.clone())); return r; }).catch(() => h)));
});
