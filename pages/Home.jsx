import Choose from "@/components/sections/Choose";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar";
import PartnerLogo from "@/components/sections/PartnerLogo";
import SearchPartner from "@/components/sections/SearchPartner";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import Working from "@/components/sections/Working";

import React from "react";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {/* Fixed Navigation */}
        <NavBar />

        {/* Hero Section */}
        <Hero />

        {/* Partner logos section */}
        <PartnerLogo />
        {/* Search Section */}
        <SearchPartner />

        {/* How It Works Section */}
        <Working />

        {/* Why Choose Us Section */}
        <Choose />

        {/* Testimonials Section */}
        <Testimonial />

        {/* Contact/Lead Form Section */}
        <Contact />

        {/* Stats Section */}
        <Stats />

        {/* Footer */}

        <Footer />
      </main>
    </>
  );
};

export default Home;
