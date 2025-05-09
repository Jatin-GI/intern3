import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, DollarSign, Shield, Users } from "lucide-react";

const Choose = () => {
  return (
    <>
      <motion.section
        id="why-choose-us"
        className="py-24 px-4 w-full bg-gray-50 dark:bg-black dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5">
              <span className="inline-block px-3 py-1 rounded-full bg-lime-200 text-black dark:bg-lime-300 dark:text-black text-xs font-medium mb-4">
                WHY SOFTSELL
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                SoftSell offers the most secure, reliable, and profitable
                platform for selling your unused software licenses. Our
                industry-leading marketplace connects you with verified buyers,
                ensuring the best possible value.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-lime-200 dark:bg-lime-300 rounded-full p-1">
                    <Check size={16} className="text-black dark:text-black" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Verified buyers only
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-lime-200 dark:bg-lime-300 rounded-full p-1">
                    <Check size={16} className="text-black dark:text-black" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Legally compliant transfers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-lime-200 dark:bg-lime-300 rounded-full p-1">
                    <Check size={16} className="text-black dark:text-black" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Transparent pricing
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-black dark:bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-white dark:text-black">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Fair Market Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the best possible value for your licenses through our
                  market-driven pricing model and extensive buyer network.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="bg-black dark:bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-white dark:text-black">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Fast Payments
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive payments quickly after your license is verified and
                  sold, usually within 24-48 hours to your preferred account.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bg-black dark:bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-white dark:text-black">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Secure Transactions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced security measures ensure your license details and
                  personal information are protected throughout the entire
                  process.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="bg-black dark:bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 text-white dark:text-black">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  Expert Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of licensing specialists is available 24/7 to guide
                  you through every step of the process and answer any
                  questions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Choose;
