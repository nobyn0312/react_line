import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyBKDqD6O9C6W-1VFyxje2rhhCh1Oq67ixw",
  authDomain: "react-line-9aad1.firebaseapp.com",
  projectId: "react-line-9aad1",
  storageBucket: "react-line-9aad1.appspot.com",
  messagingSenderId: "1012393221832",
  appId: "1:1012393221832:web:065ae7522a0859793a8ffd"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}