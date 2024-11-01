import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };
  const handleExit = () => {
    setIsLoggedIn(false);
    setMessages([]);
    setUsername("");
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Enter Your Username</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Join Chat
          </button>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">WebSocket Chat</h1>
            <button
              onClick={handleExit}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Exit Chat
            </button>
          </div>
          <ul className="space-y-2 mb-4">
            {messages.map((msg, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {msg}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              // onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
