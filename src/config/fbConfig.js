import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeKGXjuAJE64ObVsklVyrfkwEt_XorQ6A",
  authDomain: "sample-app-9f75e.firebaseapp.com",
  databaseURL: "https://sample-app-9f75e.firebaseio.com",
  projectId: "sample-app-9f75e",
  storageBucket: "",
  messagingSenderId: "457854937071",
  appId: "1:457854937071:web:c0ad68271533d204"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
