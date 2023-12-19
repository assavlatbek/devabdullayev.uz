import React from "react";

const CustomLink = ({ targetId, children }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default CustomLink;
