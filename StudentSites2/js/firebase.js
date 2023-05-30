const firebaseConfig = {
    apiKey: "AIzaSyCp-HuaANj3KeVEz-I4mXRtVgoyy7bHbmU",
    authDomain: "studentssite-d0f03.firebaseapp.com",
    projectId: "studentssite-d0f03",
    storageBucket: "studentssite-d0f03.appspot.com",
    messagingSenderId: "645201257867",
    appId: "1:645201257867:web:c3f5a93884d794089c3b8e"
  };
  
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var firestore = firebase.firestore();
  console.log(firebase)
  var email = document.getElementById("logemail");
  var password = document.getElementById("logpass");
  var fullName = document.getElementById("logname");
  
  window.login= function(e) {
    e.preventDefault();
    var obj = {
      email: email.value,
      password: password.value,
    };
  
    firebase.auth().signInWithEmailAndPassword
      .then(function (success) {
        alert("logined Successfully")
        var aaaa =  (success.user.uid);
        localStorage.setItem("uid",aaaa)
        console.log(aaaa)
        
        
        
        window.location.replace('main.html')
       // localStorage.setItem(success,user,uid)
        
      })
      .catch(function (err) {
        alert("login error"+err);
      });
  
    console.log(obj);
  }
  window.signup = function (e) {
    if(password)
    
        if(fullName.value == "" ||  email.value =="" || password.value ==""){
            alert("All Field Are Required")
        }
    
        e.preventDefault();
        var obj = {
          firstName: fullName.value,
          email: email.value,
          password: password.value,
        };
      
        firebase.auth().createUserWithEmailAndPassword
        .then(function(success){
            window.location.replace('main.html')
           console.log(success.user.uid)
          alert("signup successfully")
        })
        .catch(function(err){
          alert("Error in " + err)
        });
       console.log()
        console.log(obj);
      };
    