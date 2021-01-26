var firebaseConfig = {
      apiKey: "AIzaSyBvitKtc22goIrZFatjxpcqNKNKVVQx2Co",
      authDomain: "kwitter-1823c.firebaseapp.com",
      databaseURL: "https://kwitter-1823c-default-rtdb.firebaseio.com",
      projectId: "kwitter-1823c",
      storageBucket: "kwitter-1823c.appspot.com",
      messagingSenderId: "237424309639",
      appId: "1:237424309639:web:0bca4e035569d2634bcf22"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome "+user_name

function addroom(){
roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
      status:"updated"
});
localStorage.setItem("roomname", roomname);
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)"> ${Room_names} </div> <hr> `
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function gotoroom(room){
localStorage.setItem("roomname", room);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
