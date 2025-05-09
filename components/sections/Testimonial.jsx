import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const Testimonial = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  return (
    <>
      <motion.section
        id="testimonials"
        className="py-24 px-4 w-full bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center flex-col gap-2">
            <Badge className="bg-lime-200 text-center text-black dark:bg-lime-300 dark:text-black text-xs mx-auto mb-4">
              TESTIMONIALS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    James Davidson
                  </h4>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    IT Director, Acme Solutions
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-lime-500 fill-lime-500"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "SoftSell made it incredibly easy to recover value from our
                unused enterprise licenses after a company restructuring. Their
                valuation was fair and the payment was processed quickly. I
                highly recommend their service to any company looking to
                optimize their software expenditures."
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                  RL
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Rebecca Liu
                  </h4>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    Finance Manager, TechPro Inc.
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-lime-500 fill-lime-500"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "As someone responsible for managing our company's software
                budget, SoftSell has been a game-changer. We were able to recoup
                significant costs from unused licenses that would have otherwise
                gone to waste. The process was secure, transparent, and much
                easier than I expected."
              </p>
            </motion.div>
          </div>

          {/* CTA Banner */}
          <motion.div
            className="mt-16 bg-lime-200 rounded-2xl dark:bg-lime-700 p-8 text-black text-center shadow-xl border border-lime-300  dark:text-black dark:border-lime-400"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Join our growing community of satisfied clients
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Find out why thousands of companies trust SoftSell with their
              license management
            </p>
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-black text-white hover:scale-105 transition-all hover:bg-black cursor-pointer font-semibold px-6 py-3 rounded-full"
            >
              Get Started Today{" "}
              <ArrowRight className="ml-2 inline-block" size={18} />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Testimonial;
