import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoaESc9e28i9Osx2O8gdb6F8LiQuEQbRM",
  authDomain: "projetotdws06.firebaseapp.com",
  projectId: "projetotdws06",
  storageBucket: "projetotdws06.firebasestorage.app",
  messagingSenderId: "11536540337",
  appId: "1:11536540337:web:cd372bc1cea700e7ecf890"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
