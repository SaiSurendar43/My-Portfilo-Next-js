import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black bg-custom-text font-poppins font-medium"
    : "text-black font-poppins font-medium";
  
  return (
    <button
      className={`${buttonStyles} bg-purple-700/25 hover:bg-custom-text border-1 border-white-transparent px-6 py-2 text-base cursor-pointer rounded-xl transition-colors duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
