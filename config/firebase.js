import firebase from "firebase/compat/app";

export default function firebaseCon() {
    
const firebaseConfig = {
    apiKey: "AIzaSyCvpW0GtEqQ5pvfe5yBhUKD9Eh8abcFvhQ",
    authDomain: "test-mern-ab.firebaseapp.com",
    projectId: "test-mern-ab",
    storageBucket: "test-mern-ab.appspot.com",
    messagingSenderId: "329827519102",
    appId: "1:329827519102:web:2022888d56f34ca312262f"
  };

firebase.initializeApp(firebaseConfig)

};
