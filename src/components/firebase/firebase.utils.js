import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDP5T6hh1IaEoJQckJ59ZwwMoTrhf7Mh30",
  authDomain: "crwn-db-31039.firebaseapp.com",
  databaseURL: "https://crwn-db-31039.firebaseio.com",
  projectId: "crwn-db-31039",
  storageBucket: "crwn-db-31039.appspot.com",
  messagingSenderId: "645717314351",
  appId: "1:645717314351:web:cacb97b1e45cc9915aefda",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
