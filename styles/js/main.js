const email = document.getElementById("txtemail");
const email = document.getElementById("txtpassword");
const email = document.getElementById("submitButton");
// const email = document.getElementById("email");
// const email = document.getElementById("email");



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