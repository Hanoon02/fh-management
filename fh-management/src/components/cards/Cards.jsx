import React, { useState } from "react";
import SettingIcon from "../../assets/svgs/setting.svg";
import Tooltip from "../ui/Tooltip";

function Cards({ src, alt, disclosureText, onClick, onSettings }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full mb-5 max-w-sm bg-white border border-gray-200 rounded-md shadow-md p-8 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ height: "250px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex items-center justify-center transition-all duration-700">
        <img
          className={`w-full h-16 md:h-28 object-contain rounded-md transition-all duration-700 ${
            isHovered ? "scale-75 opacity-50 -translate-y-10" : ""
          }`}
          src={src}
          alt={alt}
        />
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-end transition-all duration-700 text-center pb-8 w-full px-4">
          <p className="text-gray-500 mb-4 font-medium text-xs">{disclosureText}</p>

          <div className="w-full flex justify-center relative">
            <button
              onClick={onClick}
              className="bg-[#3fada8] font-bold text-white px-4 py-2 rounded-md text-xs hover:bg-[#338a86]"
            >
              Open Application
            </button>
          </div>

          <Tooltip content="Settings">
            <button
              onClick={onSettings}
              className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4"
            >
              <img
                src={SettingIcon}
                alt="Settings"
                className="h-6 bg-gray-50 hover:bg-gray-100 rounded-xl"
              />
            </button>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default Cards;
