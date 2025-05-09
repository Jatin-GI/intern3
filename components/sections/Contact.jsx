"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import { Check } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "License type is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      setFormSubmitted(true);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });

      // Reset form submission state after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
  };

  return (
    <>
      <section
        id="contact-form"
        className="py-24 px-4 w-full bg-lime-50 dark:bg-black"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 dark:bg-gray-900 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center flex-col gap-3">
              <Badge className="bg-lime-200 text-center text-black text-xs mx-auto mb-4 dark:bg-lime-600 dark:text-white">
                GET STARTED
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Sell Your Unused Licenses
              </h2>
            </div>

            <p className="text-gray-600 text-center mb-8 dark:text-gray-300">
              Tell us about your licenses and we'll help you get the best
              possible value for them.
            </p>

            {formSubmitted ? (
              <Alert className="bg-lime-100 border-lime-400 text-gray-800 mb-6 dark:bg-lime-500 dark:border-lime-400 dark:text-white">
                <AlertDescription className="flex items-center">
                  <Check size={16} className="mr-2" />
                  Thank you for your message! We'll get back to you shortly.
                </AlertDescription>
              </Alert>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${
                      errors.name ? "border-red-500" : ""
                    } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${
                      errors.email ? "border-red-500" : ""
                    } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`${
                      errors.company ? "border-red-500" : ""
                    } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="licenseType"
                    className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                  >
                    License Type
                  </label>
                  <Select
                    name="licenseType"
                    value={formData.licenseType}
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "licenseType", value },
                      })
                    }
                  >
                    <SelectTrigger
                      className={`${
                        errors.licenseType ? "border-red-500" : ""
                      } dark:bg-gray-700 dark:text-white dark:border-gray-600`}
                    >
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enterprise">
                        Enterprise Software
                      </SelectItem>
                      <SelectItem value="design">Design & Creative</SelectItem>
                      <SelectItem value="productivity">
                        Productivity Suite
                      </SelectItem>
                      <SelectItem value="development">
                        Development Tools
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.licenseType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.licenseType}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your licenses"
                  className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-black text-white hover:scale-105 transition-all hover:bg-black cursor-pointer px-8 py-4 rounded-full shadow-lg hover:shadow-xl duration-300 dark:bg-black dark:text-white dark:hover:bg-black"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
