import React from 'react'
import ReactPlayer from 'react-player'
import {motion} from 'framer-motion'

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const VideoPlayer = ({ title, description, viewLink }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
    return (
        <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {description}
          </p>
          <a href={viewLink} className='text-yellow font-semibold justify-center'>View</a>
        </div>
            <ReactPlayer url='../assets/project-6.mp4' />
      </motion.div>
    );
  };

  export default VideoPlayer