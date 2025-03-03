import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Code, Server, Database, Cloud, Layers } from "lucide-react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologyStack }) => {
  return (
    <div data-aos="zoom-in">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-125 shadow-2xl"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTop: "5px solid #d946ef", // Fuchsia-600 color
            // borderTopLeftRadius: "1rem",
            // borderTopRightRadius: "1rem",
          }}
        ></div>
        {/* Overlay for hover */}
        <div className="overlay items-center justify-center gap-5 absolute top-0 left-0 w-full h-full bg-[rgba(153,38,240,0.75)] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-100 transition-all duration-500">
          <span className="text-white text-xl font-normal opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            {title}
          </span>
          <div className="relative group">
            <Link
              href={previewUrl}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security
              className="h-8 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            >
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white transition-all" />
            </Link>
            {/* Tooltip */}
            {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45">
              </div>
            </div> */}
          </div>

        </div>
      </div>



      {/* Project Description */}
      <div className="group text-white border-0 border-white-transparent rounded-b-xl hover:bg-custom-text hover:text-white shadow-lg mt-0 bg-[#F5F5F5] py-6 px-4 transition-colors duration-300">
        <p className="text-left text-base font-semibold underline underline-offset-4 font-poppins text-black mt-0 mb-8 md:mb-2 group-hover:text-white">
          {description}
        </p>

        {technologyStack && (
          <div className="text-left font-poppins mt-0 mb-8 md:mb-2 space-y-2">
            <p className="font-medium text-black text-base flex items-center gap-2 group-hover:text-white">
              <Code className="w-5 h-5 fill-[#161616] group-hover:fill-[#FFFFFFCC]" />
              Frontend: <span className="text-[#161616] text-sm font-medium group-hover:text-[#F5F5F5]">{technologyStack.frontend}</span>
            </p>

            {technologyStack.backend && (
              <p className="font-medium text-black text-base flex items-center gap-2 group-hover:text-white">
                <Server className="w-5 h-5 fill-[#161616] group-hover:fill-[#FFFFFFCC]" />
                Backend: <span className="text-[#161616] text-sm font-medium group-hover:text-[#F5F5F5]">{technologyStack.backend}</span>
              </p>
            )}

            {technologyStack.database && (
              <p className="font-medium text-black text-base flex items-center gap-2 group-hover:text-white">
                <Database className="w-5 h-5 fill-[#161616] group-hover:fill-[#FFFFFFCC]" />
                Database: <span className="text-[#161616] text-sm font-medium group-hover:text-[#F5F5F5]">{technologyStack.database}</span>
              </p>
            )}

            {technologyStack.Api && (
              <p className="font-medium text-black text-base flex items-center gap-2 group-hover:text-white">
                <Cloud className="w-5 h-5 fill-[#161616] group-hover:fill-[#FFFFFFCC]" />
                API: <span className="text-[#161616] text-sm font-medium group-hover:text-[#F5F5F5]">{technologyStack.Api}</span>
              </p>
            )}

            {technologyStack.other && (
              <p className="font-medium text-black text-base flex items-center gap-2 group-hover:text-white">
                <Layers className="w-5 h-5 fill-[#161616] group-hover:fill-[#FFFFFFCC]" />
                Other: <span className="text-[#161616] text-sm font-medium group-hover:text-[#F5F5F5]">{technologyStack.other}</span>
              </p>
            )}
          </div>
        )}
      </div>

    </div>

  );
};

export default ProjectCard;
