const txtemail = document.getElementById("txtemail");
const txtpassword = document.getElementById("txtpassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");



const auth = firebase.auth();
auth.signInWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => { }); 


submitButton.addEventListener("click", e => {
	const email = txtemail.value;
	const pass = txtpassword.value;
	const auth = firebase.auth();
	 const noLogin auth.signInWithEmailAndPassword(email, pass);
	 noLogin.catch(e => console.log(e.message));

});


SignUpBtn.addEventListener("click", e => {
	const email = txtemail.value;
	const pass = txtpassword.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));

});

btnLogout.addEventListener("click", e => {
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebase);
		btnLogout.classList.remove("hide");
	} else {
		console.log("Please login or Sign up");
		btnLogout.classList.add("hide");
	}





}