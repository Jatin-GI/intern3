"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { ThemeProvider } from "../modified/ThemeProvider";
import { MobileTheme } from "../modified/MobileTheme";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [dark, setdark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const navVariants = {
    transparent: {
      backgroundColor: "rgba(196, 235, 83, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    solid: {
      backgroundColor: "rgba(196, 235, 83, 0.95)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center transition-all duration-300 dark:bg-black dark:text-white"
        variants={navVariants}
        animate={isScrolled ? "solid" : "transparent"}
        initial="transparent"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-black text-white font-bold text-2xl p-2 rounded-lg mr-2">
              SS
            </div>
            <span className="font-bold text-xl text-black ">SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["how-it-works", "why-choose-us", "testimonials"].map((id) => (
              <Button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-medium bg-white text-black hover:bg-black hover:text-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all`}
              >
                {id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex space-x-4">
            <Button
              variant="outline"
              className="border-black  text-black hover:bg-black hover:text-white dark:border-white dark:text-black dark:bg-white dark:hover:bg-white dark:hover:text-black"
            >
              Sign In
            </Button>
            <ThemeProvider />
            {/* <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
            >
              I'm a Seller
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <Button
            className="md:hidden text-white dark:text-black "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {["how-it-works", "why-choose-us", "testimonials"].map((id) => (
                <Button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="font-medium text-white dark:text-black py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  {id
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Button>
              ))}
              <div className="flex space-x-2 pt-2">
                <MobileTheme />

                <Button
                  onClick={() => scrollToSection("contact-form")}
                  className="flex-1 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default NavBar;
