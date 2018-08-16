
const database = firebase.database();
const next = document.getElementById("btnNext");

next.addEventListener("click", e => {

	e.preventDefault();
	console.log("Does it work");
	const forum = document.getElementsByClassName("userContainer")[0];
	const mentorDIv = document.getElementsByClassName("nothing")[0];
	console.log(mentorDIv);
	forum.classList.add("hide");
	mentorDIv.classList.add("show");
	mentorDIv.classList.remove("nothing");
	

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




let current;
let data;
let people = [];

//fethches dat 
fetch('https://randomuser.me/api/?results=10')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;

    main(data);
  });


  



//one click means you switch one time
function sWitch(event){
    let i = Math.floor(Math.random() * data.results.length);
    let j = event.path['0'].id;
    let element = document.getElementById(j);
    element.classList.add("pass");
    current = element;
    window.setTimeout(remDiv,2000);
    window.setTimeout(addDiv, 2000);

}

//two click means bad
function kill(event){
    let i = Math.floor(Math.random() * data.results.length);
    let j = event.path['0'].id;
    let element = document.getElementById(j);
    element.classList.add("fail");
    current = element;
    window.setTimeout(remDiv,2000);
    window.setTimeout(addDiv, 2000);

}

//creats everything
function main(data){
for (let i = 0; i < data.results.length; i++){
    let element = document.createElement("div");
    let pic = document.createElement("img");
    let text = document.createElement("p");

    element.classList.add("user");
    element.id = i;

    pic.src = data.results[i].picture.medium;
    
    //data.results[i].name.first[0] = data.results[i].name.first[0].toUpperCase();
    //console.log(data.results[i].name.first[0].toUpperCase());
    
    text.innerText = "The user name is " + data.results[i].name.first + " " + data.results[i].name.last + ".";

    element.appendChild(pic);
    element.appendChild(text);

    element.addEventListener("click", sWitch);
	element.addEventListener("contextmenu", kill);
	

	const mentorDiv = document.getElementsByClassName("allMentors")[0];

    mentorDiv.appendChild(element);
}
}



function addDiv(){
    let i = Math.floor(Math.random() * data.results.length);
    let element = document.createElement("div");
    let pic = document.createElement("img");
    let text = document.createElement("p");

    element.classList.add("user");
    element.id = i;

    pic.src = data.results[i].picture.medium;
    text.innerText = "The user name is " + data.results[i].name.first + " " + data.results[i].name.last + ".";

    element.appendChild(pic);
    element.appendChild(text);

	element.addEventListener("click", sWitch);
	const mentorDiv = document.getElementsByClassName("allMentors")[0];
    mentorDiv.appendChild(element);

}

function remDiv(){
	const mentorDiv = document.getElementsByClassName("allMentors")[0];
    mentorDiv.removeChild(current);
}


function gSort(){
    //array of names
    people = data.results;
    people.sort(function(a, b){
    let nameA = a.gender, nameB = b.gender;
    if (nameA < nameB) //sort string ascending
        return -1 ;
    if (nameA > nameB)
        return 1;
    return 0; //default return value (no sorting)
    });
    
    data.results = people;

	for(let i = 0; i< 5; i++){//number = 5
		const mentorDiv = document.getElementsByClassName("allMentors")[0];
        mentorDiv.removeChild(document.getElementById(i));
    }


    main(data);

}

function fNameSort(){
    //array of names
    people = data.results;
    people.sort(function(a, b){
    return sort(a.name.first,b.name.first);
    });
    
    data.results = people;

	for(let i = 0; i< 5; i++){//number = 5
		const mentorDiv = document.getElementsByClassName("allMentors")[0];
		mentorDiv.removeChild(document.getElementById(i));
    }


    main(data);
}

function lNameSort(){
     //array of names
     people = data.results;
     people.sort(function(a,b){
         console.log(a);
         
        return sort(a.name.last,b.name.last);
     });
     
     data.results = people;
 
	 for(let i = 0; i< 5; i++){//number = 5
		const mentorDiv = document.getElementsByClassName("allMentors")[0];
         mentorDiv.removeChild(document.getElementById(i));
     }
 
 
     main(data);

}

function sort(a,b){
    if(a < b)
        return -1;
    if(a > b)
        return 1;
    return 0;

}



