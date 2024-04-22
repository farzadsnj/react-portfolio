import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuary from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

// Component to render individual navigation links
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase(); // Converts page name to lower case for consistent linking
  return (
    <AnchorLink
      className={`text-white hover:text-blue transition duration-500 ${
        selectedPage === lowerCasePage ? "font-bold" : ""
      }`} // Applies styles based on whether the page is selected
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)} // Sets the selected page on click
    >
      {page}
    </AnchorLink>
  );
};

// Main Navbar component
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false); // State to manage mobile menu toggle
  const isAboveSmallScreens = useMediaQuary("(min-width: 768px)"); // Media query to check for small screen sizes
  const navbarBackground = isTopOfPage ? "" : "bg-red"; // Changes navbar background based on scroll position

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-2xl font-bold">
          FARZAD SANJARANI | Software Developer
        </h4>
        {isAboveSmallScreens ? (
          // Desktop menu: visible on screens wider than 768px
          <div className="flex justify-between gap-10 font-opensans font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="GitHub"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // Mobile menu toggle button
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          // Mobile menu: visible when the menu is toggled on smaller screens
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="GitHub"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
