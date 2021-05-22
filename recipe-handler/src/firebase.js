import firebase from "firebase/app";

import "firebase/firestore";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBiTdHyW6lQIcTmq2srvjCWP4IPmsrdoOQ",
    authDomain: "recipe-handler-c1ef6.firebaseapp.com",
    databaseURL: "https://recipe-handler-c1ef6.firebaseio.com",
    projectId: "recipe-handler-c1ef6",
    storageBucket: "recipe-handler-c1ef6.appspot.com",
    messagingSenderId: "561803610211",
    appId: "1:561803610211:web:0cc07f52ca0c36aec31056"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
