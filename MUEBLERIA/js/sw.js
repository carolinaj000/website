self.addEventListener('install', function(event){
	if (self.skipWaiting) {self.skipWaiting();}
		event.waitUntil(
			caches.open('cache01').then(function(cache){
			return cache.addAll([
				'index.html',
				'catalogo.html',
				'/ccs/estilos.css',
				'/ccs/estilo2.css',
				'/img/delete.png',
				'/img/edit.png',
				'/img/icon.png',
				'/img/icon2.png',
				'/img/ilustracion1.png',
				'/img/ilustracion3.png',
				'/img/ilustracion4.png',
				'/img/ilustracion5.png',
				'/img/mueble1.jpg',
				'/img/mueble2.jpg',
				'/img/mueble3.jpg',
				'/img/mueble4.jpg',
				'/img/mueble5.jpg',
				'/img/mueble6.jpg',
                '/img/portada1.jpg'
			]);
		})
	);
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(event){
			return response || fetch(event.request);
		})
	);
});

var cacheWhitelist = ['cache01'];

caches.keys().then(function(cacheNames){
	return Promise.all(
		cacheNames.map(function(cacheName){
			if (cacheWhitelist.indexOf(cacheName)===-1) {
				return caches.delete(cacheName);

			}
		})
	);
});
caches.keys().then(function(cacheKeys){
	console.log('Version cache: ' + cacheKeys);
});