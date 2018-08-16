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




const database = firebase.database();


//When you log in

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
        getName(firebaseUser.uid);
    } else{
        console.log("Not logged in. or not working");
    }
});

// .then(function(response){
// 	firstname();
// });



function getName(uid){
	database.ref('users/' + uid).once('value').then(function(snapshot) {
		if(snapshot.exists()){
			const ready = document.getElementById("notready");
			const name = snapshot.val()['firstname'];
			ready.innerText = "Not ready just yet" + " " + name +"....";
		} else{
			console.log("NO name");
		}
	})
	
};