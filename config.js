import * as firebase from "firebase"
require ("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyD_25yhCMxXAVwUwSEKfEcXks_FVgapOEs",
    authDomain: "willy-bdc29.firebaseapp.com",
    projectId: "willy-bdc29",
    storageBucket: "willy-bdc29.appspot.com",
    messagingSenderId: "359133542580",
    appId: "1:359133542580:web:982fcbe5753d288c4cffe1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  