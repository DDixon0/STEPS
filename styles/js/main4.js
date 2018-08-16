let currentUser;



//When you log in
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log("Not logged in. or not working");
    }
});