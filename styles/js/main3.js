
const database = firebase.database();
const next = document.getElementById("btnNext");

next.addEventListener("click", e => {

	e.preventDefault();
	console.log("Does it work");
	const forum = document.getElementsByClassName("userContainer")[0];
	console.log(forum);
	forum.classList.add("hide");
	

});
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
			const name = snapshot.val()['lastname'];
			ready.innerText = "Not just ready yet..." + name;
		} else{
			console.log("NO name");
		}
	})
	
};

