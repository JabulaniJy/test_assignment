import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'
import "firebase/storage";


  var firebaseConfig = {
    apiKey: "AIzaSyAWRToexpQxoU2iuWYIfFGyjwxZ5AzZMAA",
    authDomain: "test-assignment-26e4a.firebaseapp.com",
    databaseURL: "https://test-assignment-26e4a.firebaseio.com",
    projectId: "test-assignment-26e4a",
    storageBucket: "test-assignment-26e4a.appspot.com",
    messagingSenderId: "438854313288",
    appId: "1:438854313288:web:9d2b82c11ac2f8c77aff7d",
    measurementId: "G-V5GVZYPJW8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  firebase.analytics();
  export default firebase;