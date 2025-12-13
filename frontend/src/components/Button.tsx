import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className="flex justify-center py-5">
      <button
        onClick={onClick}
        className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#0F6EB3] text-white font-medium shadow"
      >
        {text}

        <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
          <ArrowUpRight size={18} className="text-[#0F6EB3] font-bold" />
        </span>
      </button>
    </div>
  );
};

export default Button;
