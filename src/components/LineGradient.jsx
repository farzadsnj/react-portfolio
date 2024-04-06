import React from "react";

const LineGradient = ({ width = "w-full", marginTop = "mt-5", marginBottom = "mb-100" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-happyColors ${marginTop} ${marginBottom}}`} />;
};

export default LineGradient;
