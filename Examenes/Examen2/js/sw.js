self.addEventListener('fetch', function(event) {
    console.log('Interceptando petición:', event.request.url);
    
    event.respondWith(
      fetch(event.request).then(function(response) {
        if(response.status === 200 && event.request.url === url) {
          return response.json().then(function(data) {
            data.forEach(function(todo) {
              todo.id = '*' + todo.id;
            });
            return new Response(JSON.stringify(data), {
              headers: {'Content-Type': 'application/json'}
            });
          });
        } else {
          return response;
        }
      })
    );
  });
  
  self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
  });
  