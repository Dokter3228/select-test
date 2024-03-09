import React, { useRef, useState } from "react";
import arrowSvg from "../../assets/arrow.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export interface Option {
  id: string | number;
  text: string;
}

interface SelectProps {
  options: Option[];
  defaultOption: Option;
  onChange?: (option: Option) => void;
  width?: React.CSSProperties["width"];
}

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultOption,
  width,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<Option>(defaultOption);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    setValue(option);
    onChange?.(option);
  };

  return (
    <div ref={dropdownRef} className="w-fit spacing tracking-wider">
      <div className="w-full rounded-md bg-gradient-to-r from-[#54F4DF] via-[#54F4DF] to-[#2AB6FD] p-0.5">
        <button
          style={{ width }}
          className="relative rounded-md p-2 bg-main-darkGray text-main-lightGray tracking-wider"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {value.text}
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-[#34C4F6] opacity-10"></div>
        </button>
      </div>
      <div className="mt-1.5  w-full h-full">
        {isOpen &&
          options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer flex justify-between items-center first:rounded-t-md last:rounded-b-md py-4 px-6  bg-main-darkGray text-main-lightGray border-b border-b-[#BAC1CC] border-opacity-10"
            >
              {option.text}
              <img src={arrowSvg} alt="arrow-icon" className="w-6 h-6" />
            </div>
          ))}
      </div>
    </div>
  );
};
