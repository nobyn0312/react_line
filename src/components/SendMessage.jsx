import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage(){
  const [message,setMessage] =useState("");

  function sendMessage(e){
    e.preventDefault();
    const  {uid,photoURL} =auth.currentUser


    // はじめ、messageと書いてしまってずっと出来なかった。s忘れ
    db.collection("messages").add({
      text:message,
      photoURL,
      uid,
      // フォームで送信するときの時間
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");

  }
  return(
    <div>

    <form onSubmit={sendMessage}>
    <div className="sendMsg">
      <Input
      type="text"
      placeholder="メッセージ入力"
      value={message}
      // message ステートにinout内容を格納
      onChange={(e)=>setMessage(e.target.value)}/>
      <SendIcon/>
    </div>


  </form>
</div>
  )
}

export default SendMessage;
