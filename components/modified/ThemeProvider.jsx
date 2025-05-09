// components/ThemeProvider.jsx
"use client";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="flex items-center space-x-4">
        <label htmlFor="theme-toggle" className="text-lg">
          <div className="relative">
            <input
              id="theme-toggle"
              type="checkbox"
              checked={dark}
              onChange={() => setDark(!dark)}
              className="sr-only"
            />
            <div className="w-14 h-8 bg-gray-300 rounded-full cursor-pointer flex items-center justify-between p-1 transition-colors duration-300">
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                  dark
                    ? "translate-x-6 bg-green-500"
                    : "translate-x-0 bg-gray-100"
                }`}
              />
            </div>
          </div>
        </label>
      </div>
      {children}
    </>
  );
};
