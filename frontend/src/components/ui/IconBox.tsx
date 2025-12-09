import React from "react";

type IconBoxProps = {
  icon: string;     // icon path
  text: string;     // description text
};

const IconBox: React.FC<IconBoxProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 bg-[#0F6EB3] p-3 rounded-xl shadow-md">
      
      {/* White icon container */}
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
        <img src={icon} alt="icon" className="w-8 h-8 object-contain" />
      </div>

      {/* Right side text */}
      <p className="text-white font-medium text-sm md:text-base">
        {text}
      </p>
    </div>
  );
};

export default IconBox;
