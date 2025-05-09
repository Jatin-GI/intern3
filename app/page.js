"use client";

import ChatWidget from "@/components/ui/ChatWidget";
import Home from "@/pages/Home";

export default function App() {
  return (
    <div className="overflow-x-hidden ">
      <Home />
      <ChatWidget />
    </div>
  );
}
