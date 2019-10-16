import firebase from "firebase/app"; // The reason we dont just do from 'firebase' is because firebase has all of the util libraries loaded when we installed firebase
import "firebase/firestore"; // Note this is stored inside firebase keyword on line 1
import "firebase/auth";

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

firebase.initializeApp(config);

// Create the user Data 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {    // User does not exist or not signed in
    return;
  }

  // Query inside firestore for the document to see if it already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  console.log(snapShot)

  // If user does not exists, create it and put it in DB
  if (!snapShot.exists) {
    const {displayName, email} = userAuth     // Deconstruct it from userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (error) {
      console.log("error creating user: ", error.message)
    }
  }

  return userRef;

  
}




// We add stuff to the Firestore DB
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  // You need to perform a batch write so that either All or None of our request go through
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumalator, collection) => {
    accumalator[collection.title.toLowerCase()] = collection;
    return accumalator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth(); // We need this for anyhing related to authentication
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Google Authentication
googleProvider.setCustomParameters({ prompt: "select_account" }); // We want to trigger the google pop up  for user signin
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

// NOTE :: YOU STILL NEED TO CONFIGURE YOUR FIREBASE PROJECT TO ALLOW GOOGLE SIGN IN
