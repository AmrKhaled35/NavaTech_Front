import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Chat from '../components/Chat'
import './Forum.css'
function Forum() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const [socket, setSocket] = useState(null);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const newSocket = new WebSocket(`ws://localhost:8000/ws/chat/${room}/`);
      newSocket.onopen = () => {
        console.log("Connected to the server");
      };
      setSocket(newSocket);
      setShowChat(true);
    }
  };

  return (
    <div className="Apple">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Forum;
