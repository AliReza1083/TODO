// https://console.firebase.google.com/u/1/project/practice-89827/firestore/data/~2FUser~2F2XGlyfdr20UAA3JuOohu7QaAryu1
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const AuthChanged = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOut = () => {
  return signOut(auth);
};

export const db = getFirestore();

export const SaveUserDoc = async (userAuth, additionalInformation) => {
  const docRef = doc(db, "User", userAuth.uid);
  const { displayName, photoURL, email, uid } = userAuth;

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    await setDoc(docRef, {
      displayName: displayName,
      photoURL: photoURL,
      email: email,
      uid: uid,
      ...additionalInformation,
    });
  }
};
