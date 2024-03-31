// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD26s03SCZYSnrKeF7zFV0lykq8REs2gDY",
//     authDomain: "my-protfolio-90fd4.firebaseapp.com",
//     databaseURL: "https://my-protfolio-90fd4-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "my-protfolio-90fd4",
//     storageBucket: "my-protfolio-90fd4.appspot.com",
//     messagingSenderId: "803746109885",
//     appId: "1:803746109885:web:5f9214b1210e1c23231ad4"
//   };

//   //initialize firebase
//   firebase.initializeApp(firebaseConfig);

//   //reference contactInfo collections
//   var contactInfoDB = firebase.database().ref("My-Protfolio");

//   document.getElementById('contactForm').addEventListener('submit', submitForm);

//   function submitForm(e){
//       e.preventDefault();

   
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var mobile = document.getElementById('mobile').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//       console.log(name, email, mobile, subject, message);
//   } 



  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD26s03SCZYSnrKeF7zFV0lykq8REs2gDY",
    authDomain: "my-protfolio-90fd4.firebaseapp.com",
    databaseURL: "https://my-protfolio-90fd4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-protfolio-90fd4",
    storageBucket: "my-protfolio-90fd4.appspot.com",
    messagingSenderId: "803746109885",
    appId: "1:803746109885:web:5f9214b1210e1c23231ad4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference the root of your database
var rootRef = firebase.database().ref();

// Reference the "My-Protfolio" node within your database
var contactInfoDB = rootRef.child("my-protfolio");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    console.log(name, email, mobile, subject, message);
}
