import React, { useEffect, useState } from "react";
import "./App.css";

function Messenger() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">WebSocket Chat</h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 mb-4">
        {/* ULCLASSES */}
      </div>
      <div className="flex w-full max-w-lg space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="clientName"
          className="flex p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a Message"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-4 rounded-md hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default Messenger;
