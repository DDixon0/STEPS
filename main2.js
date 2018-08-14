const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

btnSignUp.addEventListener("click", e => {

	e.preventDefault();

	const credentials = getCredentials()
	const email = credentials.email;
	const password = credentials.password;
	
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
		console.log('success');
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorMessage);
	  // ...
	});
});



btnLogout.addEventListener("click", e => {
	e.preventDefault();
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  console.log('success');
	}).catch(function(error) {
	  // An error happened.
	  console.log(error);
	});

});