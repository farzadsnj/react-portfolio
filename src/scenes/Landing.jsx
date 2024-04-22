import React from "react";
import useMediaQuary from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

// The Landing component serves as the main entry view of the application,
// providing links to other sections and showcasing the main profile information.
const Landing = ({ setSelectedPage }) => {
  // Custom hook to check for medium screen sizes and above
  const isAboveMediumScreens = useMediaQuary("(min-width: 1060px)");

  return (
    <section
      id="home" // Section ID used for linking and accessibility
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* Image section that conditionally renders different styles based on screen size */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
          >
            <img
              alt="profile"
              src="../assets/farzad-profile.png"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[400px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="../assets/farzad-profile.png"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] hover:filter hover:saturate-200 transition duration-500"
          />
        )}
      </div>
      {/* Main section for textual content and navigation */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Farzad Sanjarani
          </p>
          <p className="mt-10 mb-7 text-2xl text-center text-yellow md:text-start font-playfair">
            Software Developer | React Developer
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Navigation links to resume and GitHub sections */}
          <AnchorLink
            className="bg-gradient-happyColors text-black rounded-md py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("resume")}
            href="#resume"
          >
            Resume
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("github")}
            href="#github"
          >
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
              My GitHub Projects
            </div>
          </AnchorLink>
        </motion.div>

        {/* Social media icons */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
