import React from 'react'
import LineGradient from "../components/LineGradient";
import useMediaQuary from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slideshow from "../components/SlideShow";

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

const Services = ({ title, description, viewLink, githubCode }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const servicesTitle = title.split(" ").join("-").toLowerCase();
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
      <img alt={servicesTitle} src={`../assets/${servicesTitle}.jpg`} />
    </motion.div>
  )
}

export default Services