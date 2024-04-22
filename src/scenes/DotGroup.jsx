import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// DotGroup component: Provides a navigation sidebar with dot indicators for each section.
const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // Style string for selected page dot indicator
  const selectedStyles = `relative justify-center bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  // Component rendering
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {/* Dot for 'home' section */}
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />

      {/* Dot for 'resume' section */}
      <AnchorLink
        className={`${
          selectedPage === "resume" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#resume"
        onClick={() => setSelectedPage("resume")}
      />

      {/* Dot for 'projects' section */}
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />

      {/* Dot for 'github' section */}
      <AnchorLink
        className={`${
          selectedPage === "github" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#github"
        onClick={() => setSelectedPage("github")}
      />

      {/* Dot for 'services' section */}
      <AnchorLink
        className={`${
          selectedPage === "services" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#services"
        onClick={() => setSelectedPage("services")}
      />

      {/* Dot for 'testimonials' section */}
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      />

      {/* Dot for 'contact' section */}
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
