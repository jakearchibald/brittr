// self.addEventListener('fetch', function(event) {
//  event.respondWith(
//    fetch(event.request).then(function(response) {
//      if (response.status === 404) {
//        // TODO: instead, respond with the gif at
//        // /imgs/dr-evil.gif
//        // using a network request
//        return fetch('/imgs/dr-evil.gif');
//      }
//      return response;
//    }).catch(function() {
//      return new Response("Uh oh, that totally failed!");

self.addEventListener('install', function(event) {
  event.waitUntil(
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
    caches.open('wittr-statis-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // Leave this blank for now.
  // We'll get to this in the next task.

self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  // if (event.request.url.endsWith('.jpg')) {
  //  event.respondWith(
  //    fetch('/imgs/dr-evil.gif')
  //  )
  // };

  // TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  // event.respondWith(
  //  new Response('<b class="a-winner-is-me">Hello!</b>', {
  //   headers: {'Content-Type': 'text/html'}
  //  })
  // )

});