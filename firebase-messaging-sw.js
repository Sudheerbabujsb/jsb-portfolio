importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBd14pfFYZVkAIDHumbRwo4qP79QRz0Os0",
  authDomain: "jss1207.firebaseapp.com",
  projectId: "jss1207",
  messagingSenderId: "121988951850",
  appId: "1:121988951850:web:f8af63653cab1bd8eb3853"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,{
      body: payload.notification.body,
      icon: "/icon-192.png"
    }
  );
});