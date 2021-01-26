//YOUR FIREBASE LINKS
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
username=localStorage.getItem("username")
roomname=localStorage.getItem("roomname")

function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            USERNAME:username,
            MESSAGE:message,
            LIKES: 0
      });
      document.getElementById("message").value="";
}

function getData() { 
      firebase.database().ref("/"+roomname).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) {
                    childKey  = childSnapshot.key; 
                    childData = childSnapshot.val(); 
                    if(childKey != "status") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
user=message_data["USERNAME"]
Name_tag=`<h4> ${user}  </h4> `
message=message_data["MESSAGE"];
message_tag=`<h4 id="message_h4"> ${message} </h4>`
likes=message_data["LIKES"];
likes_tag=`<button class=" btn btn-warning" id=${firebase_message_id} value=${likes} onclick="updateLike(this.id)"> <span class="glyphicon glyphicon-thumbs-up">  </span> &nbsp; Like : ${likes} </button> <br> <hr>`

document.getElementById("output").innerHTML+=Name_tag+message_tag+likes_tag;

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

function updateLike(button_id){
      like=document.getElementById(button_id).value;
      updated_likes=Number(like)+1;
      console.log(updated_likes);

      firebase.database().ref(roomname).child(button_id).update({
            LIKES:updated_likes
      })
}

