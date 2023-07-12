// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9NovYN5kRkQW5EiaNfeEZQmbt9RsfcWo",
  authDomain: "kwitter-f5e26.firebaseapp.com",
  databaseURL: "https://kwitter-f5e26-default-rtdb.firebaseio.com",
  projectId: "kwitter-f5e26",
  storageBucket: "kwitter-f5e26.appspot.com",
  messagingSenderId: "276551866101",
  appId: "1:276551866101:web:526cbacd7e8745ba9b17bc",
  measurementId: "G-G6K6LT127X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

user_name="";
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"giving Admission"
    });
}