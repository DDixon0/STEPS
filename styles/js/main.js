
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");





const auth = firebase.auth();
auth.signInWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => { }); 
