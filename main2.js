const btnSignUp = document.getElementById("submitButton");
const btnLogout = document.getElementById("btnLogout");

function getCredentials() {
	const mentor = document.getElementById("mentor");
	const txtname = document.getElementById("txtfullname");
	const txtemail = document.getElementById("txtemail");
	const txtpassword = document.getElementById("txtpassword");
	const vtfypassword = document.getElementById("vtfypassword");
	const name = txtname.value;
	const email = txtemail.value;
	const pass = txtpassword.value;
	const vtfypass = vtfypassword.value;
	
	txtname.value = '';
	txtemail.value = '';
	txtpassword.value = '';
	vtfypassword.value = '';

	return {
		isMentor: mentor.checked,
		name: name,
		email: email,
		password: pass,
		vtfypassword: vtfypass,
	}

}

btnSignUp.addEventListener("click", e => {

	e.preventDefault();

	const credentials = getCredentials();
	const isMentor = credentials.isMentor;
	const name = credentials.name;
	const email = credentials.email;
	const password = credentials.password;
	const vtfypassword = credentials.vtfypassword;
	
	if (password === vtfypassword){
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
			console.log('success');
			const userId = firebase.auth().currentUser.uid;
			writeUserData(userId, name, isMentor);
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage);
		  // ...
		});
	}else {
		alert("Password needs to be the same");
	}
	
});

function writeUserData(userId, name, isMentor) {
  firebase.database().ref('users/' + userId).set({
  	isMentor: isMentor,
    name: name
  });
}

function showPass(){
	const passwordseen = document.getElementsByClassName("passes");

	for (let i = 0; i < passwordseen.length; i++) {
		if (passwordseen[i].type === "password") {
	        passwordseen[i].type = "text";
	    } else {
	        passwordseen[i].type = "password";
	    }
	}
}




// btnLogout.addEventListener("click", e => {
// 	e.preventDefault();
// 	firebase.auth().signOut().then(function() {
// 	  // Sign-out successful.
// 	  console.log('success');
// 	}).catch(function(error) {
// 	  // An error happened.
// 	  console.log(error);
// 	});
