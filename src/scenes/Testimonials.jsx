import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* heading */}
      <motion.div
        className="md:w-full text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-center text-4xl mb-5 text-red">
          TESTIMONALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 w-full text-white text-center text-2xl font-playfair">
          Discover the impact of our services through the voices of our
          satisfied clients. Below, you'll find testimonials from businesses and
          individuals who have experienced the transformative benefits of our
          solutions firsthand. Each review reflects our commitment to excellence
          and our dedication to fulfilling the unique needs of our clients. Read
          on to see how we've helped others succeed and how we can do the same
          for you.
        </p>
      </motion.div>

      {/* TESTIMONALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
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
            Exceptional technical support! Whenever we face an issue, their team
            is quick to respond and resolve it, ensuring minimal downtime. Their
            proactive approach is a game-changer for us.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
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
            Our new website has received nothing but praise, thanks to the
            innovative and user-focused web services provided. The attention to
            detail and creative design have truly set our brand apart.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[auto] h-[auto] flex flex-col justify-end p-16 mt-48
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
            The team delivered beyond expectations with their cutting-edge
            software solutions. Their professionalism and tailored services
            transformed our business processes, making everything more
            efficient. Highly recommend!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
