import React from "react";
import HeroPanel from "./components/HeroPanel";
import ChatPanel from "./components/ChatPanel";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slatebg">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HeroPanel />
        <ChatPanel />
      </div>
    </div>
  );
}
