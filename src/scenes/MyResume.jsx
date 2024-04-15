import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuary from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slideshow from "../components/SlideShow";

const MyResume = () => {
  const experiences = [
    {
      title: "SOFTWARE DEVELOPER",
      years: "2023-2023",
      description:
        "Write clean, efficient, and maintainable code with a focus on scalability and performance.",
    },
    {
      title: "FRONT-END DEVELOPER",
      years: "2019-2022",
      description:
        "Design and develop responsive web applications using ReactJs library",
    },
    {
      title: "NETWORK ADMINISTRATOR & IT SUPPORT",
      years: "2016-2019",
      description:
        "Setup, config and maintain IT networks & routers by running tests and the systems. Troubleshoot and resolve network issues. Provide IT support to users.",
    },
  ];

  const skills = [
    "Problem-Solving",
    "Technology Integration",
    "Express",
    "MongoDB",
    "SQL",
    "JavaScript",
    "Web Security",
    "Azure fundamentals",
    "Git",
    "Agile Methodologies",
    "Microsoft ASP.NET",
    "AWS fundamentals",
  ];

  const isAboveMediumScreens = useMediaQuary("(min-width: 1060px)");
  return (
    <section id="resume" className="p-10 pb-15">
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
            My <span className="text-yellow">Resume</span>
          </p>
          <LineGradient width={"w-1/3"} />
          <p className="mt-8 mb-7 text-2xl font-semibold">
            The following three categories describe my main expertise.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
            >
              <LineGradient width={"w-full"} />
              <img
                alt="skills"
                src="../assets/skills-image.png"
                className="z-10"
              />
            </div>
          ) : (
            <>
              <Slideshow className="z-10" />
              <img
                alt="skills"
                src="../assets/skills-image.png"
                className="z-10"
              />
            </>
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
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
                SOFTWARE DEVELOPER
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-600 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Working with Modern technologies such as{" "}
            <span className="text-yellow">
              JavaScript / ReactJs / Backend with C#
            </span>
          </p>
        </motion.div>

        {/* Design */}
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
                NETWORK ADMINISTRATOR
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Using technologies such as{" "}
            <span className="text-yellow">
              CCNA / CCNP / Network troubleshooting
            </span>{" "}
            / <span className="text-yellow">Network Security</span> /{" "}
            <span className="text-yellow">CISCO devices</span>
          </p>
        </motion.div>

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
                IT support specialist
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Using Tools and Services such as{" "}
            <span className="text-yellow">Hardware, Software installation</span>{" "}
            /{" "}
            <span className="text-yellow">
              Troubleshooting and Problem solving
            </span>{" "}
            /{" "}
            <span className="text-yellow">Computer maintenance and repair</span>
          </p>
        </motion.div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32 flex-wrap w-50">
        {/* An Overview Summary */}
      <br />
        <SectionComponent
          title="Summary"
          delay={0.5}
          content="Strategic Software Engineer skilled in application development, testing and optimization. Excels at coordinating ground-up planning,
                programming, and implementation for core modules. Maintains strong object-oriented and software architecture fundamentals.
                Currently, I excel in web and software development, combining creative design with technical expertise. My freelance endeavors in
                IT support showcase my commitment to operational excellence. Pursuing a master’s in information technology at QUT, with a focus
                on software development, I am positioned to contribute significantly to tech-centric roles. My long-term plan includes a sustained
                career in Australia, supported by my current visa status with future graduate visa."
        />
      </div>
      <LineGradient width={"w100%"} />
      {/* Career History */}
      <br />
      <SectionComponent
        title="Career History"
        delay={0.6}
        experiences={experiences || []}
      />
      <LineGradient width={"w100%"} />
      {/* Skills */}
      <br />
      <SectionComponent title="Skills" delay={0.7} skills={skills} />
      <LineGradient width={"w100%"} />
      <br />
      <SectionComponent
        title="Publications"
        delay={0.8}
        content={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 list-disc list-inside">
            <div className="linkedin-post-wrapper">
              <p className="font-playfair font-semibold text-2xl mb-5">
                Advanced <span className="text-yellow">Git Commands</span>
              </p>
              <div className="iframe-container">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7165931316151066626"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded post"
                  className="responsive-iframe w-full h-50"
                ></iframe>
              </div>
            </div>
            <div className="linkedin-post-wrapper">
              <p className="font-playfair font-semibold text-2xl mb-5">
                Essential <span className="text-yellow">Docker Commands</span>
              </p>
              <div className="iframe-container">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7167729096272150528"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded post"
                  className="responsive-iframe w-full"
                ></iframe>
              </div>
            </div>
            <div className="linkedin-post-wrapper">
              <p className="font-playfair font-semibold text-2xl mb-5">
                Dynamic data{" "}
                <span className="text-yellow">visualization Challenge</span>
              </p>
              <div className="iframe-container">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7165543138386755584"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded post"
                  className="responsive-iframe w-full"
                ></iframe>
              </div>
            </div>
          </div>
        }
      />
    </section>
  );
};

const SectionComponent = ({ title, delay, experiences, content, skills }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="mb-5">
      <p className="font-playfair font-semibold text-3xl">{title}</p>
    </div>
    {experiences &&
      experiences.map((exp, index) => (
        <div key={index} className="mt-4">
          <p className="font-semibold text-xl text-yellow">{exp.title}</p>
          <p className="text-md">{exp.years}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    {content && <>{content}</>}
    {skills && (
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xl">•</span>
            <span className="ml-2">{skill}</span>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

export default MyResume;
