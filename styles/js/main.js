const btnLogin = document.getElementById("submitButton");

//
function getCredentials() {
	const txtemail = document.getElementById("txtemail");
	const txtpassword = document.getElementById("txtpassword");
	const email = txtemail.value;
	const pass = txtpassword.value;
	
	txtemail.value = '';
	txtpassword.value = '';

	return {
		email: email,
		password: pass
	};

};

//Login Button
btnLogin.addEventListener("click", e => {
	e.preventDefault();
	
	const credentials = getCredentials();
	const email = credentials.email;
	const password = credentials.password;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
		alert('success');
	
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		alert(errorMessage);
	});
});

//When you log in
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		const path = 'users/' + firebase.auth().currentUser.uid + '/isMentor';
		
		firebase.database().ref(path).once('value').then(function(isMentorSnapshot) {
			const isMentor = isMentorSnapshot.val();
			if(isMentor){
				alert(isMentor);
				window.location.assign("index3.html");
			}
			else{
				window.location.assign("index4.html");
			}
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			alert(errorMessage);
		});
	}
	else{
		console.log("Not logged in!");
	}
});







