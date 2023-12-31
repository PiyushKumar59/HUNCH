

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBClRAUFZDAiBgwSrL-QiR8MjSLChJoLBI",
  authDomain: "hunch-af059.firebaseapp.com",
  databaseURL: "https://hunch-af059-default-rtdb.firebaseio.com",
  projectId: "hunch-af059",
  storageBucket: "hunch-af059.appspot.com",
  messagingSenderId: "919377948577",
  appId: "1:919377948577:web:f8068436cb9551f3dc65e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log("room name clicked - " + name);
      localStorage.setItem("room_name",name);
      
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
