let currentUser;



//When you log in
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
        currentUser = firebaseUser.uid;
    }
    else{
        console.log("Not logged in. or not working");
    }
});
