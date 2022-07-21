import firebase from "firebase";

const app = {
  apiKey: "AIzaSyA2Ys6l0DZV6hphtQcW_ceHcWmOSE-6IVA",
  authDomain: "firepad-another.firebaseapp.com",
  projectId: "firepad-another",
  databaseURL: "https://firepad-another-default-rtdb.firebaseio.com",
  storageBucket: "firepad-another.appspot.com",
  messagingSenderId: "183344666162",
  appId: "1:183344666162:web:580d05b0310c7c43d0ce2b",
};

function initialize() {
  if (!firebase.apps.length) firebase.initializeApp(app);
  else firebase.app();
}

export default initialize;
