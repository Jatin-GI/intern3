import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-8 border-t border-gray-800  bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-lime-300 text-black font-bold text-2xl p-2 rounded-lg mr-2">
                  SS
                </div>
                <h3 className="text-2xl font-bold">SoftSell</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-xs">
                Turn your unused software licenses into cash, effortlessly and
                securely
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-lime-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-lime-300">
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
            <div className="text-gray-400 text-sm">
              &copy; 2025 SoftSell. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                variant="outline"
                className="border-gray-700 text-black hover:text-lime-300 hover:border-lime-300 hover:scale-105 transition-all hover:bg-black cursor-pointer"
              >
                Subscribe to our newsletter
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
