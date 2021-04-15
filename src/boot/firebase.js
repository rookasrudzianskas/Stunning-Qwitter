import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_sXoRpc8m6fNIwCl31mD1dOQ9Pj5Nnd4",
  authDomain: "qwitter-207de.firebaseapp.com",
  projectId: "qwitter-207de",
  storageBucket: "qwitter-207de.appspot.com",
  messagingSenderId: "85382594464",
  appId: "1:85382594464:web:8c3bab608093738c45aec5"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
export default db

