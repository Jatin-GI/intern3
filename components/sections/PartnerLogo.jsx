"use client";
import React from "react";
import { motion } from "framer-motion";

const PartnerLogo = () => {
  const partnerLogos = [
    { name: "Adobe", color: "#FF0000" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "AWS", color: "#FF9900" },
    { name: "Salesforce", color: "#00A1E0" },
    { name: "Slack", color: "#4A154B" },
    { name: "Atlassian", color: "#0052CC" },
  ];

  return (
    <section className="py-12 px-4 w-full dark:bg-black bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-8 font-medium dark:text-gray-300"
        >
          Trusted by companies using these platforms
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all hover:scale-105 shadow-md group-hover:bg-white group-hover:shadow-xl"
                style={{ backgroundColor: partner.color }}
              >
                {partner.name.charAt(0)}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300 dark:text-gray-300 dark:group-hover:text-white">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogo;
