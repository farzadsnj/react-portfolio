import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuary from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slideshow from "../components/SlideShow";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuary("(min-width: 1060px)");
  return (
    <section id="skills" className="p-10 pb-24">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width={"w-1/3"} />
          <p className="mt-8 mb-7 text-2xl font-semibold">
            The following three categories describe my main specialties.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
          before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
            >
              {/* <Slideshow className="z-10"/> */}
              <img
                alt="skills"
                src="../assets/skills-image.png"
                className="z-10"
              />
            </div>
          ) : (
            <Slideshow className="z-10" />
            // <img
            //   alt="skills"
            //   src="../assets/skills-image.png"
            //   className="z-10"
            // />
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Graphic and UI Design
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-600 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Working with Designing tools of Adobe, such as{" "}
            <span className="text-yellow">Photoshop / Illustrator / XD</span>
          </p>
        </motion.div>

        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                FrondEnd Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Using basics such as{" "}
            <span className="text-yellow">HTML / CSS / JAVASCRIPT</span> and{" "}
            <span className="text-yellow">REACT.JS</span> libraries
          </p>
        </motion.div>

        {/* imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Computer & networks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <span className="text-yellow">Establish, Operate and Maintain</span>{" "}
            local and wide area networks /{" "}
            <span className="text-yellow">Computer Specialist</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
