var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    id:"com.myapp",
    // Enable swipe panel
    panel: {
      swipe: "left",
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'index.html',
      },
      {
        path: "/usuario/",
        url: "usuario.html"
      },
      {
        path:"/galeria/",
        url:"galeria.html",
      }
    ],
    // ... other parameters
  });

var mainView = app.views.create('.view-main');