import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/farzad-sanjarani-b1a9a095/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/farzadsnj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github" src="../assets/githubpng.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/farzadsnj.cv/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src="../assets/instagram.png" />
      </a>

      <a
        className="flex font-playfair hover:opacity-50 transition duration-500 justify-center"
        href="https://zil.ink/farzadsnj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="cd" src="../assets/profile.png" className=" mr-2 justify-center"/>
        DOWNLOAD CV
      </a>
    </div>
  );
};

export default SocialMediaIcons;
