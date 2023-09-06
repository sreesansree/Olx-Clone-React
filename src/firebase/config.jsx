import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC08h62xx-k2KrKGc063hE-U937uZhIxtg",
    authDomain: "clone-olx-d0544.firebaseapp.com",
    projectId: "clone-olx-d0544",
    storageBucket: "clone-olx-d0544.appspot.com",
    messagingSenderId: "1033039469706",
    appId: "1:1033039469706:web:7a8183e264ee96cec42173",
    measurementId: "G-VVN4GGTY8G"
  };

  export default firebase.initializeApp(firebaseConfig)