"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cloud, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getChatSession } from "@/configs/AIModel";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const session = await getChatSession();
      const prompt = `You are SoftSell's virtual assistant.
${trimmed}\nRespond as SoftSell's virtual assistant. Provide helpful, clear, and concise information.
SoftSell is a platform that helps businesses resell unused or surplus software licenses quickly and legally. The process is simple: users upload license details, receive an instant valuation, and get paid fast. SoftSell ensures a secure, compliant resale experience and offers top market rates.

You should respond like a helpful product expert. Keep answers friendly, short, and informative.

If someone asks "What is SoftSell?" — explain that it's a software license resale platform for businesses.

If someone asks "How does it work?" — explain the 3 steps: Upload License → Get Valuation → Get Paid.

If someone asks "Why should I trust SoftSell?" — emphasize benefits like:
- Verified buyers and sellers
- Instant license valuation
- Legal and compliant resale
- Transparent pricing

If someone asks about license types — mention that SoftSell supports common enterprise software licenses (e.g., Adobe, Microsoft, Autodesk).

If someone says “I want to get started” — guide them to use the “Sell My Licenses” button or fill the contact form.

Never use complex technical terms unless asked. Always sound confident and concise.
`;
      const finalResult = prompt.trim();
      const aiResponse = await session.sendMessage(finalResult);
      const text = await aiResponse.response.text();

      // Add AI response
      setMessages((prev) => [...prev, { role: "ai", text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="bg-white shadow-xl border border-gray-100 rounded-3xl w-[380px] h-[500px] flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 font-semibold text-white text-lg border-b">
              Chat Support
            </div>
            <ScrollArea className="flex-1 p-4 space-y-3 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-800 self-end rounded-br-none ml-auto mb-2" // User message on the right with margin at the bottom
                      : "bg-gray-200 text-gray-800 self-start rounded-bl-none mr-auto mb-2" // AI message on the left with margin at the bottom
                  } rounded-xl p-4 max-w-[80%] whitespace-pre-wrap transition-all transform hover:scale-105 duration-200 shadow-sm hover:shadow-md`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="bg-gray-100 text-gray-500 rounded-xl p-3 max-w-[80%] self-start">
                  Typing...
                </div>
              )}
            </ScrollArea>
            <div className="border-t p-4 flex items-center gap-2 bg-gray-50">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={1}
                className="resize-none flex-1 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Type a message..."
                disabled={loading}
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="rounded-full p-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                disabled={loading}
              >
                <Send size={20} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="default"
        className="rounded-full w-14 h-14 shadow-lg mt-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
        onClick={() => setOpen(!open)}
      >
        {open ? "−" : <Cloud />}
      </Button>
    </div>
  );
};

export default ChatWidget;
