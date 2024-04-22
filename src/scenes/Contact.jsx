import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

// Contact component handles user input for contacting the site owner
const Contact = () => {
  // Utilizes useForm hook from react-hook-form for form validation and handling
  const {
    register, // function to register an input
    trigger, // function to manually trigger form validation
    formState: { errors }, // object containing form state and validation errors
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (e) => {
    const isValid = await trigger(); // Validate form before submission
    if (!isValid) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  };

  return (
    <>
      <section id="contact" className="py-48">
        <motion.div
          className="flex justify-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 }, // Initial state before animation
            visible: { opacity: 1, x: 0 }, // State after animation
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-yellow">CONTACT ME</span> FOR MORE
              INFORMATION
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-1/2" />
            </div>
            <span>
              <SocialMediaIcons /> {/* Displays social media icons */}
            </span>
          </div>
        </motion.div>

        {/* Section for form and image display */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            className="basis-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img alt="contact" src="../assets/contact-image.jpeg" />
          </motion.div>

          <motion.div
            className="basis-1/2 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Form for sending a message */}
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/7b212bbe8a2399dd2a44fa7143417449"
              method="POST"
            >
              <input
                className="w-full bg-blue font-semibold placeholder-gray-400 p-3"
                type="text"
                name="name"
                placeholder="NAME"
                {...register("name", {
                  // Register input for validation
                  required: true,
                  maxLength: 100,
                })}
              />
              {/* Display validation error messages */}
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-blue font-semibold placeholder-gray-400 p-3 mt-5"
                type="email"
                name="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email address."}
                </p>
              )}

              <textarea
                className="w-full bg-blue font-semibold placeholder-gray-400 p-3 mt-5"
                name="message"
                rows="4"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              >
                SEND YOUR MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
