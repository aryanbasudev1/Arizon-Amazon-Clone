import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPnfiENNHc4fviSkaiqEnlcrKHw0KDoZU",
  authDomain: "clone-9271a.firebaseapp.com",
  projectId: "clone-9271a",
  storageBucket: "clone-9271a.appspot.com",
  messagingSenderId: "722624471706",
  appId: "1:722624471706:web:b42a4dae66737af7ba3523",
  measurementId: "G-M8PPDFQLMX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // to initialise the app

const db = firebaseApp.firestore(); //firestore is the real time database
const auth = firebase.auth(); 

export { db, auth };