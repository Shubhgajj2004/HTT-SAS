import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwcp0817p6i6f4CHZoqNwKALHiDLIZV1g",
    authDomain: "sas-fat-to-slim.firebaseapp.com",
    databaseURL: "https://sas-fat-to-slim-default-rtdb.firebaseio.com",
    projectId: "sas-fat-to-slim",
    storageBucket: "sas-fat-to-slim.appspot.com",
    messagingSenderId: "235918008790",
    appId: "1:235918008790:web:b0bcfd89824d10e2f68477",
    measurementId: "G-99ZBGXPZ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



var myForm = document.getElementById("contact-form");

myForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      

});

   