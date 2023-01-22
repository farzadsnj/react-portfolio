import React from "react";
import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            FARZAD SANJARANI
          </p>
        </div>
        <LineGradient />
        <div className="md:flex justify-center md:justify-between text-left">
          <p className="font-playfair text-md text-black">
            ©2023 SANJARANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
