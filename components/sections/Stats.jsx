import React from "react";
import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";
const Stats = () => {
  const statsData = [
    { value: "98", sign: "%", label: "Customer Satisfaction" },
    { value: "24", sign: "h", label: "Average Payout Time" },
    { data: "$", value: "15", sign: "M+", label: "Paid to Sellers" },
  ];
  return (
    <>
      {" "}
      <section className="py-16 px-4 w-full bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-lime-300">
                  <div>
                    {stat.data}
                    <CountUp
                      from={0}
                      to={stat.value}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    {stat.sign}
                  </div>
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
