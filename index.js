// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC5Y4hAT-HHxc7nIKt7qapHzFJ7ehHyOQs",
  authDomain: "am-family.firebaseapp.com",
  databaseURL: "https://am-family-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "am-family",
  storageBucket: "am-family.firebasestorage.app",
  messagingSenderId: "301481716931",
  appId: "1:301481716931:web:23ceec0b2dbd9b69da8676",
  measurementId: "G-DHWB8C2C67"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
  alert("আপনি লগআউট হয়েছেন!");
  window.location.href = "index.html";
}