import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage";

function Line(){
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });

  }, [])
  console.log(messages)

  return (
    <div>
    <SignOut />

    <div className="msgs">
      {messages.map(({ id, text, photoURL, uid }) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <div key={id} className={`msg ${
          uid === auth.currentUser.uid ? "sent" : "received"
          }`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>

    <SendMessage />
  </div>
  )
}

export default Line;