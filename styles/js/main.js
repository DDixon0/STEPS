
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

// // Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();





const auth = firebase.auth();
auth.signInWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => { }); 
