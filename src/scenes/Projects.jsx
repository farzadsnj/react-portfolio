import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, viewLink, githubCode }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <a
          href={viewLink}
          target="_blank"
          rel="noreferrer"
          className="text-yellow font-semibold justify-center"
        >
          View
        </a>
        <a
          href={githubCode}
          target="_blank"
          rel="noreferrer"
          className="text-yellow font-semibold justify-center text-sm"
        >
          View On GitHub
        </a>
      </div>
      <img alt={projectTitle} src={`../assets/${projectTitle}.jpg`} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-35 pb-40">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl pt-5">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width={"w-2/3"} />
          </div>
        </div>
        <p className="mt-10 mb-10 text-2xl font-semibold">
          Some of my Projects are listed below
        </p>
      </motion.div>

      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* row1 */}
          <div className="flex justify-center text-center items-center p-10 bg-yellow max-w-[400px] max-h-[400px] text-2xl text-black font-playfair font-semibold">
            <span className="hover:text-3xl hover:transition duration-300">
              React.JS Redux/Thunk Projects
            </span>
          </div>
          <Project
            title="Project 9"
            viewLink="https://www.instagram.com/reel/CnG0CIbOHLI/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/shopping-site"
            description="Shopping site with Redux & Thunk & fetch API"
          />
          <Project
            title="Project 8"
            viewLink="https://www.instagram.com/reel/CnM7RBvJgEZ/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/weather-app"
            description="Weather App & Forecast with fetch API"
          />
          <Project
            title="Project 7"
            viewLink="https://www.instagram.com/p/CnXmT_OSowe/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/dashboard-app"
            description="Dashboard App with Data Grid & Nivo charts & Material UI"
          />

          {/* row2 */}
          <Project
            title="Project 4"
            viewLink="https://www.instagram.com/reel/Cjsac1QIeT1/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/Live_user_filter"
            description="Live Search User with JavaScript"
          />
          <Project
            title="Project 5"
            viewLink="https://www.instagram.com/tv/CjSERXrqNZv/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/passwordGenerator"
            description="Password Generator with JavaScript"
          />
          <Project
            title="Project 6"
            viewLink="https://www.instagram.com/tv/CjSEV5AK1To/?utm_source=ig_web_copy_link"
            githubCode="https://github.com/farzadsnj/verify_UI"
            description="Verification UI Design with JavaScript"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue 
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <span className="hover:text-3xl hover:transition duration-300">
              JAVASCRIPT Mini Projects
            </span>
          </div>

          {/* row1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red 
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <span className="hover:text-3xl hover:transition duration-300">
              Graphic & UI Designs
            </span>
          </div>
          <Project
            title="Project 3"
            description="Social Media Post and Story Design"
          />
          <Project
            title="Project 2"
            description="Accurate drawing of geometric shapes for educational purposes"
          />
          <Project
            title="Project 1"
            viewLink="https://www.instagram.com/reel/CiAQFDzASpC/?utm_source=ig_web_copy_link"
            description="UI Design with Adobe XD"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
