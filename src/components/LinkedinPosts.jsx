import React from "react";

const LinkedInPost = () => {
  return (
    <div>
      {/* The `iframe` code copied from LinkedIn. Example below: */}
      <iframe 
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890123456789" 
        height="800" 
        width="504" 
        frameborder="0" 
        allowfullscreen="" 
        title="LinkedIn Post"
        style={{ border: 'none', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default LinkedInPost;
