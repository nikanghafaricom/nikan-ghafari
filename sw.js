const CACHE_NAME = 'nikan-messenger-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// نصب سرویس ورکر و کش کردن فایل‌ها
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// مدیریت درخواست‌ها برای حالت آفلاین
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
