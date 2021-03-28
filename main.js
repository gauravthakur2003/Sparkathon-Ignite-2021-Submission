var a;
var flag = 0;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      // User is signed in.
      
  
 //     document.getElementById("user_div").style.display = "block";
 //     document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
//        window.location.replace("index2.html");
  
        var email_id = user.email;
//        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
//      window.location.replace("index.html");
      document.getElementById("user_div").style.display = "none";
//      document.getElementById("login_div").style.display = "block";
  
    }
  });
  

const auth = firebase.auth();
var messageRef = firebase.database().ref('messages');

document.getElementById('ContactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var cname = getInputVal('company_name'); 
    var email = getInputVal('email');
    var hloc = getInputVal('Hlocation');
    var oloc = getInputVal('Olocation');
    var password = getInputVal('password');

    console.log(name);
    console.log(cname);
    console.log(email);
    console.log(hloc);
    console.log(oloc);
    console.log(password)


    saveMessage(name, cname, email, hloc, oloc, password);

    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e => alert(e.message));

    document.querySelector('.alert').style.display='block';

    setTimeout(function(){
        document.querySelector('.alert').style.display='none';

    },3000);

    document.getElementById('ContactForm').reset();
}



function getInputVal(id){

    return document.getElementById(id).value;
}

// to save the message at firebase

function saveMessage(name, cname, no, hloc, oloc, password){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        cname: cname,
        no: no,
        hloc: hloc,
        oloc: oloc,
        password : password

    });
}

function signin(){
    var email2 = getInputVal('email2');
    var password2 = getInputVal('password2');
    console.log('----');
    console.log(email2);

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
        
        var errorCode = error.code;
        var errorMessage = error.message;
        a= errorMessage;
        window.alert("Error : " + errorMessage);
        })
        
//        if(a){
//          alert('There is an error');
//          flag=1;
//        }

        
        console.log(flag);
    
        

//        firebase.auth().signInWithEmailAndPassword(email2, password2).then(function(user) {
//          alert('Hi next step is going to index2.html');
//          window.location.replace("index2.html");
        
        if (flag==0){
          console.log(flag);
          window.location.replace("index2.html");
        }
      




//    firebase.auth().signInWithEmailAndPassword(email2, password2).then((userCredential) => {
    // Signed in
//    var user = userCredential.user;
    // ...

//  .catch((error) => {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//  });

//    const promise = auth.signInWithEmailAndPassword(email2, password2);
//    promise.catch(e => alert(e.message));
//    alert('Successfully signed in as '+ email2);
//  }
//    firebase.auth().signInWithEmailAndPassword(email2, password2);

//window.location.replace("index2.html");
}

function logout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert('Signed out');
      }).catch((error) => {
        // An error happened.
      });
}

