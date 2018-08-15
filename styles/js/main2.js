const btnSignUp = document.getElementById("submitButton");
const btnLogout = document.getElementById("btnLogout");

function getCredentials() {
	const mentor = document.getElementById("mentor");
	const txtfirstname = document.getElementById("txtfirstname");
	const txtlastname = document.getElementById("txtlastname");
	const txtemail = document.getElementById("txtemail");
	const txtpassword = document.getElementById("txtpassword");
	const vtfypassword = document.getElementById("vtfypassword");
	const firstname = txtfirstname.value;
	const lastname = txtlastname.value;
	const email = txtemail.value;
	const pass = txtpassword.value;
	const vtfypass = vtfypassword.value;
	
	txtfirstname.value = '';
	txtlastname.value = '';
	txtemail.value = '';
	txtpassword.value = '';
	vtfypassword.value = '';

	return {
		isMentor: mentor.checked,
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: pass,
		vtfypassword: vtfypass
	}
}

btnSignUp.addEventListener("click", e => {

	e.preventDefault();

	const credentials = getCredentials();
	const isMentor = credentials.isMentor;
	const firstname = credentials.firstname;
	const lastname = credentials.lastname;
	const email = credentials.email;
	const password = credentials.password;
	const vtfypassword = credentials.vtfypassword;
	
	if (password === vtfypassword){
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
			alert('success');
			const userId = firebase.auth().currentUser.uid;
			writeUserData(userId, firstname, lastname, isMentor);
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  alert(errorMessage);
		  // ...
		});
	}else {
		alert("Password needs to be the same");
	}
	
});

function writeUserData(userId, firstname, lastname, isMentor) {
  firebase.database().ref('users/' + userId).set({
  	isMentor: isMentor,
    firstname: firstname,
    lastname: lastname
  }, function(error) {
	  if (error) {
		  console.log(error);
	  } else {
		console.log('hi');
		window.location.assign("index.html");
	  }
	  
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
