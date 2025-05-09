import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  DollarSign,
  Upload,
} from "lucide-react";
import { Button } from "../ui/button";

const Working = () => {
  return (
    <>
      <motion.section
        id="how-it-works"
        className="py-24 px-4 w-full bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-lime-200 text-black dark:bg-lime-600 dark:text-white text-xs font-medium mb-4">
              SIMPLE PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined process makes it easy to turn your unused software
              licenses into cash in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connection line in background */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-lime-200 via-lime-300 to-lime-200 z-0 dark:bg-gradient-to-r dark:from-lime-600 dark:via-lime-500 dark:to-lime-600"></div>

            <motion.div
              className="flex flex-col items-center text-center z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-black hover:scale-105 transition-all text-white p-5 rounded-full mb-6 shadow-lg">
                <Upload size={40} />
              </div>
              <div className="bg-white m-[26px] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <span className="text-lime-600 font-bold text-sm mb-2">
                  STEP 1
                </span>
                <h3 className="text-2xl font-semibold mb-3">Upload License</h3>
                <p className="text-gray-600 flex-grow dark:text-gray-300">
                  Securely upload your license details and supporting documents
                  through our encrypted platform.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                  <span className="text-black flex items-center text-sm font-medium dark:text-white">
                    Secure and Encrypted <Check size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-black hover:scale-105 transition-all text-white p-5 rounded-full mb-6 shadow-lg">
                <DollarSign size={40} />
              </div>
              <div className="bg-white p-6 m-[26px] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <span className="text-lime-600 font-bold text-sm mb-2">
                  STEP 2
                </span>
                <h3 className="text-2xl font-semibold mb-3">Get Valuation</h3>
                <p className="text-gray-600 flex-grow dark:text-gray-300">
                  Our algorithm provides a fair market valuation based on
                  current demand and license specifics.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                  <span className="text-black flex items-center text-sm font-medium dark:text-white">
                    Real-time Market Rates <Check size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-black hover:scale-105 transition-all text-white p-5 rounded-full mb-6 shadow-lg">
                <CreditCard size={40} />
              </div>
              <div className="bg-white m-[26px] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <span className="text-lime-600 font-bold text-sm mb-2">
                  STEP 3
                </span>
                <h3 className="text-2xl font-semibold mb-3">Get Paid</h3>
                <p className="text-gray-600 flex-grow dark:text-gray-300">
                  Once your license is verified and sold, receive payment
                  directly through your preferred method.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                  <span className="text-black flex items-center text-sm font-medium dark:text-white">
                    Fast 24-48 Hour Transfers{" "}
                    <Check size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Banner */}
          <motion.div
            className="mt-16 bg-lime-200 rounded-2xl p-8 text-black text-center shadow-xl border border-lime-300 dark:bg-lime-700 dark:text-white dark:border-lime-600"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Ready to unlock the value of your unused licenses?
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Join thousands of satisfied customers who have already sold their
              licenses through SoftSell.
            </p>
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-black text-white hover:scale-105 transition-all hover:bg-black cursor-pointer font-semibold px-6 py-3 rounded-full"
            >
              Get Started Now{" "}
              <ArrowRight className="ml-2 inline-block" size={18} />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Working;
