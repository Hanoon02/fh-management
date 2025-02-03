import React, { useState } from "react";

function Cards({ src, alt, disclosureText, onClick }) {
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
        <div className="absolute inset-0 flex flex-col items-center justify-end transition-all duration-700 text-center pb-8">
          <p className="text-gray-700 mb-4 px-4 text-xs">{disclosureText}</p>
          <button
            onClick={onClick}
            className="bg-[#3fada8] text-white px-4 py-2 rounded-md hover:bg-[#338a86]"
          >
            Open Application
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
