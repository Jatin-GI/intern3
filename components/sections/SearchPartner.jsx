import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchPartner = () => {
  const popularLicenseTypes = [
    "Adobe Creative Cloud",
    "Microsoft 365",
    "AWS Credits",
    "Salesforce",
    "Slack",
    "Atlassian Suite",
    "Figma",
    "Zoom",
    "Google Workspace",
    "Autodesk",
  ];

  return (
    <>
      <section className="py-16 px-4 w-full dark:bg-black bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Find the perfect license for your needs
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Browse thousands of verified software licenses at unbeatable
              prices
            </p>
          </div>

          <div className="relative mb-10">
            <Input
              placeholder="Search for software licenses..."
              className="pl-12 py-6 text-lg rounded-full shadow-md dark:bg-gray-800 dark:text-white"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
              size={20}
            />
          </div>

          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-4">
              Popular license types:
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularLicenseTypes.map((type, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-200 hover:border-lime-500 hover:bg-lime-50 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors dark:bg-gray-800 dark:border-gray-700 dark:hover:border-lime-500 dark:hover:bg-lime-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPartner;
