

const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

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


































// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);
// auth.createUserWithEmailAndPassword(email, pass);
// auth.onAuthStateChanged(firebaseUser => { }); 





// btnSignUp.addEventListener("click", e => {
// 	const email = txtemail.value;
// 	const pass = txtpassword.value;
// 	const auth = firebase.auth();
// 	const promise = auth.createUserWithEmailAndPassword(email, pass);
// 	promise.catch(e => console.log(e.message));

// });

// btnLogout.addEventListener("click", e => {
// 	firebase.auth().signOut();
// });

// firebase.auth().onAuthStateChanged(firebaseUser => {
// 	if(firebaseUser){
// 		console.log(firebase);
// 		btnLogout.classList.remove("hide");
// 	} else {
// 		console.log("Please login or Sign up");
// 		btnLogout.classList.add("hide");
// 	}





// }

function login(){

	var userEmail = document.getElementById("txtemail").value;
	var userPass = document.getElementById("txtpassword").value;






}












