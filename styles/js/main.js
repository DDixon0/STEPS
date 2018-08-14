

const btnLogin = document.getElementById("submitButton");

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
	}

}

btnLogin.addEventListener("click", e => {
	e.preventDefault();
	
	const credentials = getCredentials()
	const email = credentials.email;
	const password = credentials.password;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
		console.log('success');
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		console.log(errorMessage);
	});
});

// const btnSignUp = document.getElementById("btnSignUp");
// const btnLogout = document.getElementById("btnLogout");

// btnSignUp.addEventListener("click", e => {

// 	e.preventDefault();

// 	const credentials = getCredentials()
// 	const email = credentials.email;
// 	const password = credentials.password;
	
// 	firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
// 		console.log('success');
// 	}).catch(function(error) {
// 	  // Handle Errors here.
// 	  var errorCode = error.code;
// 	  var errorMessage = error.message;
// 	  console.log(errorMessage);
// 	  // ...
// 	});
// });



// btnLogout.addEventListener("click", e => {
// 	e.preventDefault();
// 	firebase.auth().signOut().then(function() {
// 	  // Sign-out successful.
// 	  console.log('success');
// 	}).catch(function(error) {
// 	  // An error happened.
// 	  console.log(error);
// 	});

// });







