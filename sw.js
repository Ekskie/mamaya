self.addEventListener('install', (event) => {
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
                'malupiton.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
