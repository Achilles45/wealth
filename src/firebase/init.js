import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByG5ADWLabmt9QHSTC-HbIICXMEUasQD8",
  authDomain: "wealth-arena.firebaseapp.com",
  databaseURL: "https://wealth-arena.firebaseio.com",
  projectId: "wealth-arena",
  storageBucket: "wealth-arena.appspot.com",
  messagingSenderId: "863648755771",
  appId: "1:863648755771:web:5d4e9f24c0c90d2f30ec1e",
  measurementId: "G-XRWJM90EET"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();