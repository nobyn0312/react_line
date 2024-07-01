import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage(){
  const [message,setMessage] =useState("");
  function sendMessage(e){
    e.preventDefault();
    const  {uid,photoURL} =auth.currentUser

    db.collection("message").add({
      text:message,
      photoURL,
      uid,
      // フォームで送信するときの時間
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessage("");

  }
  return <div>

      <form onSubmit={sendMessage}>
      <div className="sendMsg">
        <input
        type="text"
        placeholder="メッセージ入力"
        value={message}

        // message ステートにinout内容を格納
        onChange={(e)=>setMessage(e.target.value)}/>
      </div>


    </form>
  </div>;
};

export default SendMessage;
