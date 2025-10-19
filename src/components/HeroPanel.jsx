import React from "react";
import Logo from "./Logo";

export default function HeroPanel() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Logo />
        <h1 className="mt-12 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Join our platform <br /> and earn <span className="text-primary">1 ETB</span> for each user
        </h1>

        <p className="mt-6 text-slate-600">
          Coming soon — Dec 30, 2025. Sign in with Telegram to participate and earn.
        </p>

        <div className="mt-10">
          {/* Telegram Login placeholder button. Replace with actual widget or link */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl shadow hover:opacity-95"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M..." fill="white"/></svg>
            Login with Telegram
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-500">
          Official communities:
          <ul className="mt-2 space-y-1">
            <li>https://t.me/SQBOOM</li>
            <li>https://t.me/SQBOOM_COMMUNITY</li>
            <li>https://t.me/SQBOOMBOT</li>
            <li>https://t.me/SQBOOM_SUPPORT</li>
          </ul>
        </div>
      </div>

      <div className="text-xs text-slate-400 mt-6">
        © SQ BOOM
      </div>
    </div>
  );
}
