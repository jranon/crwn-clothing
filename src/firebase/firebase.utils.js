import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwmvX0KuhCvIp9B0IXxxvYrD_0U7VNCOI",
    authDomain: "crwn-db-b1025.firebaseapp.com",
    databaseURL: "https://crwn-db-b1025.firebaseio.com",
    projectId: "crwn-db-b1025",
    storageBucket: "crwn-db-b1025.appspot.com",
    messagingSenderId: "436103486263",
    appId: "1:436103486263:web:9059d9dcac02497e1418b2",
    measurementId: "G-XZZD9T0J7M"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
