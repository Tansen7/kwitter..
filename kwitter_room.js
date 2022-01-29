
var firebaseConfig = {
	apiKey: "AIzaSyDMHoYld5xpqYQERRSpikG-ojq_iJI0QDo",
	authDomain: "classtes-6a88a.firebaseapp.com",
	databaseURL: "https://classtes-6a88a-default-rtdb.firebaseio.com",
	projectId: "classtes-6a88a",
	storageBucket: "classtes-6a88a.appspot.com",
	messagingSenderId: "768714188466",
	appId: "1:768714188466:web:fc3ef18653fbdc7d200bab"
  };
  
 
firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


function addRoom(){
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
	 purpose : "adding room name"     
	});
	localStorage.setItem("room_name", room_name);
	window.location="kwitter_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
	 Room_names = childKey;
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
   document.getElementById("output").innerHTML +=row;      
	});
});
}
getData();

function redirectToRoomName(name){
	console.log(name);
	localStorage.setItem("room_name", name);
	window.location="kwitter_page.html";
}
function logout(){
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location = "index.html";
}