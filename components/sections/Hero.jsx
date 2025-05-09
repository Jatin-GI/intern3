import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, MessageSquare, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";
import { FlipWords } from "../modified/flip-words";
import { TextGenerateEffect } from "../modified/text-generate-effect";
const Hero = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const words = [
    "streamlined",
    "innovative",
    "scalable",
    "customizable",
    "cloud-based",
    "seamless",
    "secure",
    "optimized",
    "collaborative",
    "integrated",
    "data-driven",
    "powerful",
    "efficient",
    "reliable",
    "automated",
    "cutting-edge",
    "intuitive",
    "next-gen",
    "solution-driven",
  ];
  const tagline =
    "Turn your unused software licenses into cash, effortlessly and securely";
  return (
    <>
      <motion.section
        className="w-full bg-gradient-to-b from-lime-200 to-lime-300 dark:from-zinc-900 dark:to-zinc-950 text-black dark:text-white pt-32 pb-20 px-4 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-6xl relative">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 dark:bg-lime-700 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-500 dark:bg-lime-800 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative">
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6 text-center leading-tight"
              variants={itemVariants}
            >
              <span className="block">
                <FlipWords words={words} />
              </span>
              <span className="block">Marketplace for SaaS Platforms</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto text-gray-800 dark:text-gray-300"
              variants={itemVariants}
            >
              <TextGenerateEffect words={tagline} />
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer hover:scale-105 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="leading-none">I'm a Buyer</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer hover:scale-105 font-semibold text-lg px-8 py-6 rounded-full"
              >
                I'm a Seller
              </Button>
            </motion.div>
          </div>

          {/* Features bar */}
          <motion.div
            className="mt-16 md:mt-24 flex justify-center gap-8 flex-wrap"
            variants={itemVariants}
          >
            {[
              { icon: <Shield size={28} />, label: "Escrow Protection" },
              { icon: <Users size={28} />, label: "AI Verification" },
              {
                icon: <MessageSquare size={28} />,
                label: "Encrypted Private Chat",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-black text-white group-hover:bg-white group-hover:text-black dark:bg-white dark:text-black dark:group-hover:bg-black dark:group-hover:text-white p-5 w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 shadow-md group-hover:shadow-xl">
                  {item.icon}
                </div>
                <span className="font-medium text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
