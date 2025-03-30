self.addEventListener('install', (event) => {
    self.skipWaiting(); // Force new service worker to activate immediately
    event.waitUntil(
        caches.open('mamaya-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'login.html',
                'addingWork.html',
                'admin.html',
                'signup.html',
                'userdashboard.html',
                'worklist.html',
                'manifest.json',
                'malupiton.jpg',
                'ins.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch(() => {
                return new Response('You are offline', { status: 503 });
            });
        })
    );
});
