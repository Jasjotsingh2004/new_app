import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNLEGiw-QskxbV8YiZeSM8cw2H-21Ucw8",
    authDomain: "app-company-e660f.firebaseapp.com",
    projectId: "app-company-e660f",
    storageBucket: "app-company-e660f.appspot.com",
    messagingSenderId: "139983888858",
    appId: "1:139983888858:web:e1504e1801ae1839b1a0e3"
  };
  firebase.initializeApp(firebaseConfig)


  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

export { signInWithEmailAndPassword, createUserWithEmailAndPassword };