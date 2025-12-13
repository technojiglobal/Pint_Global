import React from "react";

type IconBoxProps = {
  icon: string;   // icon path
  text: string;   // description text
};

const IconBox: React.FC<IconBoxProps> = ({ icon, text }) => {
  return (
    <div
      className="
        flex items-center
        gap-3 sm:gap-4
        bg-[#0F6EB3]
        p-3 sm:p-4
        rounded-xl
        shadow-md
      "
    >
      {/* Icon container */}
      <div
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          bg-white
          rounded-lg
          flex items-center justify-center
          shrink-0
        "
      >
        <img
          src={icon}
          alt="icon"
          className="
            w-8 h-8
            sm:w-10 sm:h-10
            object-contain
          "
        />
      </div>

      {/* Text */}
      <p
        className="
          text-white
          font-semibold
          text-sm sm:text-md md:text-lg
          leading-snug
        "
      >
        {text}
      </p>
    </div>
  );
};

export default IconBox;
