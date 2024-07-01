import firebase from "firebase/compat/app";
import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

function SignIn() {
  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return <div>SignIn
  <Button onClick={signInWithGoogle}>
    Googleでログインする
  </Button>
  </div>;
}

export default SignIn;
