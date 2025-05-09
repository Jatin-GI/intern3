"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const MobileTheme = ({ children }) => {
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
      <Button
        onClick={() => setDark(!dark)}
        variant="outline"
        className="flex-1 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
      >
        {dark ? "Light" : "Dark"} Mode
      </Button>
      {children}
    </>
  );
};
