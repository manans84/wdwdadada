//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCzLN0HzuNeOw_ad1Kk8jRNM6a_UBuO7kA",
    authDomain: "classtest-a5abb.firebaseapp.com",
    databaseURL: "https://classtest-a5abb-default-rtdb.firebaseio.com",
    projectId: "classtest-a5abb",
    storageBucket: "classtest-a5abb.appspot.com",
    messagingSenderId: "54590184475",
    appId: "1:54590184475:web:31c8219a5cb3746c8becbe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                
                //End code
            }
        });
    });
}
getData();

