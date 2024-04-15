import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-16">
      {/* heading */}
      <motion.div
        className="md:full-auto text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl text-center mb-5 text-orange-400">
          My Services
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <h2 className="mt-10 w-full text-white text-3xl text-center font-playfair">
          How I Can Help
        </h2>
        <p className="mt-10 w-full text-white text-xl text-center font-playfair">
          Explore our comprehensive suite of services designed to meet your
          unique needs. Whether you're looking for innovative solutions, expert
          guidance, or reliable support, our dedicated team is equipped to
          deliver excellence. With a focus on quality, efficiency, and customer
          satisfaction, we ensure that every service is tailored to help you
          achieve your goals effectively and efficiently. Discover how our
          services can transform your challenges into opportunities.
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-service1"
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
          <h2 className="text-center text-2xl font-opensans font-bold text-orange-500">
            Innovative Software Solutions
          </h2>
          <br />
          <p className="text-center font-opensans">
            Dive into our world of innovative software solutions where we turn
            complex challenges into user-friendly software applications. With
            expertise in cutting-edge technologies and a commitment to agile
            development practices, we ensure your software is robust, scalable,
            and aligned with your business goals. Experience custom development
            tailored to meet your unique needs, from dynamic web applications to
            efficient system software.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-service2"
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
          <h2 className="text-center text-2xl font-opensans font-bold text-deep-blue">
            Dependable Technical Support
          </h2>
          <br />
          <p className="text-center font-opensans">
            Our technical support services are designed to ensure smooth
            operation and minimal downtime for your business. With a team of
            dedicated professionals equipped to handle inquiries and
            troubleshoot issues swiftly, we provide support via phone, email, or
            remote assistance. Trust in our ability to deliver timely solutions
            and proactive maintenance, keeping your systems running efficiently
            around the clock.{" "}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-service3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">"</p>
          <h2 className="text-center text-2xl font-opensans font-bold text-black">
            Creative Web Services
          </h2>
          <br />
          <p className="text-center font-opensans">
            Explore our creative web services that bring your digital vision to
            life. Specializing in web design and development, we craft visually
            appealing and functionally superior websites and web applications.
            From conceptualization through to deployment, our comprehensive
            approach ensures a seamless user experience that engages and
            converts your target audience. Leverage our expertise to boost your
            online presence with cutting-edge web solutions.{" "}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
