
import React, { useState, useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import MyMessage from "./components/MyMessage";
import TheirMessage from "./components/TheirMessage";
import MessageForm from "./components/MessageForm";

const SocketChat = () => {
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [connection, setConnection] = useState(null);
  const chatEndRef = useRef(null);

  // ✅ Create connection
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5035/chat", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  // ✅ Start connection
  useEffect(() => {
    if (connection) {

      // 👉 listen FIRST
      connection.on("ReceiveMessage", (user, text, time) => {
        console.log("📩 Received:", user, text);
        setMessageList((list) => [...list, { user, text, time }]);
      });

      // 👉 then start
      connection.start()
        .then(() => console.log("✅ Connected"))
        .catch((err) => console.error("❌ Error:", err));
    }
  }, [connection]);

  // ✅ Send message
  const sendMessage = async (message) => {
    if (!username) return alert("Enter username");
    if (!connection) return alert("Not connected");

    const time = new Date().toLocaleTimeString();

    try {
      await connection.invoke("SendMessage", username, message, time);
    } catch (err) {
      console.error("❌ Send error:", err);
    }
  };

  // ✅ Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "#ece5dd"
    }}>
      <div style={{
        padding: "10px",
        background: "#075e54",
        color: "white",
        fontWeight: "bold"
      }}>
        🔥 SignalR Chat
      </div>

      {!username && (
        <div style={{ padding: "20px" }}>
          <input
            placeholder="Enter username"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
          <button onClick={() => {
            if (!inputUser) return alert("Enter username");
            setUsername(inputUser);
          }}>
            Join Chat
          </button>
        </div>
      )}

      {username && (
        <>
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px"
          }}>
            {messageList.map((msg, index) => (
              <div key={index}>
                {msg.user === username
                  ? <MyMessage message={msg} />
                  : <TheirMessage message={msg} />
                }
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <MessageForm sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default SocketChat;