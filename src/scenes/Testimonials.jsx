import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  return (
    <section id="tesimonials" className="pt-32 pb-16">
      {/* heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 w-full text-white text-2xl font-playfair">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          corporis.
        </p>
      </motion.div>

      {/* TESTIMONALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">"</p>
          <p className="text-center text-xl font-opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            natus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">"</p>
          <p className="text-center text-xl font-opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            natus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl text-black">"</p>
          <p className="text-center text-xl font-opensans text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            natus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
