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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
