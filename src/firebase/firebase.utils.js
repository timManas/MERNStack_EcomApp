import firebase from 'firebase/app'     // The reason we dont just do from 'firebase' is because firebase has all of the util libraries loaded when we installed firebase
import 'firebase/firestore'         // Note this is stored inside firebase keyword on line 1
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCoHoLC91Y8uxA-A5dyTBnmWD5JhqUyPMo",
    authDomain: "crwn-db-afc21.firebaseapp.com",
    databaseURL: "https://crwn-db-afc21.firebaseio.com",
    projectId: "crwn-db-afc21",
    storageBucket: "",
    messagingSenderId: "1033368157567",
    appId: "1:1033368157567:web:edb0692c8e7ba3e9072e4a",
    measurementId: "G-PD9ZNX07YQ"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();  // We need this for anyhing related to authentication
  export const firestore = firebase.firestore();    

  const provider = new firebase.auth.GoogleAuthProvider();  // Google Authentication
  provider.setCustomParameters({prompt: 'select_account'})      // We want to trigger the google pop up  for user signin
  export const signInWithGoogle = () => auth.signInWithPopup(provider) 

  export default firebase;


  // NOTE :: YOU STILL NEED TO CONFIGURE YOUR FIREBASE PROJECT TO ALLOW GOOGLE SIGN IN