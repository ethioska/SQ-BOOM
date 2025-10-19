import React, { useState } from "react";

const demoMessages = [
  { id: 1, text: "Hi!", from: "other" },
  { id: 2, text: "Hello!", from: "me" },
  { id: 3, text: "How are you?", from: "other" }
];

export default function ChatPanel() {
  const [messages, setMessages] = useState(demoMessages);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    const newMsg = { id: Date.now(), text: text.trim(), from: "me" };
    setMessages((m) => [...m, newMsg]);
    setText("");
    // TODO: send message to backend / Telegram integration
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-slate-900">Chat</h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 pb-4">
        <div className="space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                  m.from === "me" ? "bg-primary text-white" : "bg-slate-100 text-slate-800"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message"
            className="flex-1 px-4 py-3 rounded-xl bg-slate-100 focus:outline-none"
          />
          <button
            onClick={send}
            className="px-4 py-3 rounded-xl bg-slate-900 text-white"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
