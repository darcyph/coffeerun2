(function (window) {
    'use strict';
    var App = window.App || {};

    window.FirebaseConfig = {
      apiKey: "AIzaSyBtEW1jqIuOg1sMxpD37Fm3llrS6l3fqag",
      authDomain: "cofeerun-daec0.firebaseapp.com",
      projectId: "cofeerun-daec0",
      storageBucket: "cofeerun-daec0.appspot.com",
      messagingSenderId: "995946062999",
      appId: "1:995946062999:web:b42318f0b94e843653f5d2",
      measurementId: "G-9ZF3LXE7M0"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    
    window.App = App;

  })(window);