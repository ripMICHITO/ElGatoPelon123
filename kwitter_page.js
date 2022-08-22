//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyD0xn_1wSf3V38pO6SqjGKWHkjOie7nt-Q",
      authDomain: "pruebaclase-733cd.firebaseapp.com",
      databaseURL: "https://pruebaclase-733cd-default-rtdb.firebaseio.com",
      projectId: "pruebaclase-733cd",
      storageBucket: "pruebaclase-733cd.appspot.com",
      messagingSenderId: "386505971095",
      appId: "1:386505971095:web:581b328bcb964aa15e20d2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id) ;
console.log(message_data) ;
name=message_data['name'] ;
message=message_data['message'] ;
like=message_data['like'] ;
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>" ;
message_with_tag="<h4 class='message_h4'>"+message+"</h4>" ;
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"on"
//Termina código
      } });  }); }
getData();
