"use client";
import { JsonValue } from "@prisma/client/runtime/library";
import React, { useState } from "react";

const SelectGroupOne = ({ label, optionText, options, defaultValue = "", onChange, ...rest } : {
  label: string, 
  optionText:string, 
  options: Map<bigint, JsonValue | string>,
  defaultValue?: string,
  onChange: (selectedOption: string) => void,
  [key: string]: any
}) => {
  
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(defaultValue ? true : false);
  
  console.log("select component:", defaultValue);
  
  
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleOptionSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">
        {" "}
        {label}{" "}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={(e) => {
            handleOptionSelected(e);
            changeTextColor();
          }}
          {...rest}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            {optionText}
          </option>
          {Array.from(options.entries()).map(([key, value]) => {
            const typedValue = value as { [key: string]: string; };
            return(
            <option key={`${value}-${key}`} value={key.toString()} className="text-body dark:text-bodydark">
              {typedValue.en !== '' ? typedValue.en : (typedValue.de !== '' ? typedValue.de : (typedValue.fr !== '' ? typedValue.fr : (typedValue.hu !== '' ? typedValue.hu : typedValue.ro)))}
            </option>
          )})}
          {/* <option value="USA" className="text-body dark:text-bodydark">
            USA
          </option>
          <option value="UK" className="text-body dark:text-bodydark">
            UK
          </option>
          <option value="Canada" className="text-body dark:text-bodydark">
            Canada
          </option> */}
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectGroupOne;
