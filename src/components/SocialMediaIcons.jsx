import React from "react";

const SocialMediaIcons = () => {

  return (
    <div className="flex-col justify-start">
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/farzadsnj/"
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
          href="https://drive.google.com/file/d/1V9UYzXk1NPJXiTiSnDt3djK6FQI_3f5B/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="cd"
            src="../assets/profile.png"
            className=" mr-2 justify-center"
          />
          DOWNLOAD CV
        </a>
        </div>
        <div className="flex justify-center md:justify-start my-10 gap-7">
          <a
            className="hover:opacity-50 transition duration-500"
            href={`tel:+61415479443`}
            rel="noreferrer"
          >
            <img alt="phone" src="../assets/phone-call.png" />
          </a>

          <a
            className="hover:opacity-50 transition duration-500"
            href={`mailto:farzadsnjau@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="gmail" src="../assets/gmail-logo.png" />
          </a>

          <a
            className="hover:opacity-50 transition duration-500"
            href="https://wa.me/message/KW7P6LKILMKMJ1"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="whatsapp" src="../assets/whatsapp.png" />
          </a>
          <a
            className="hover:opacity-50 transition duration-500"
            href="https://t.me/farzadsnj"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="telegram" src="../assets/telegram.png" />
          </a>
        </div>
      </div>
  );
};

export default SocialMediaIcons;
