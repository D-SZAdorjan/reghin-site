"use client"
import { useState } from "react";

const SwitcherTwo = ({ id = "toggle2", label, currentValue, onChange, ...rest } : { id: string, label?:string, currentValue: boolean, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; [key: string]: any;  }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(!currentValue);
    onChange(e);
  }

  return (
    <div x-data="{ switcherToggle: false }" className="py-3">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        {/* {label && <span className="mb-3 block text-sm font-medium text-black dark:text-white">
          {label}
        </span>} */}
        <div className="relative">
          <input
            id={id}
            type="checkbox"
            className="sr-only"
            onChange={handleChange}
            {...rest}
          />
          <div className={`h-5 w-14 rounded-full bg-meta-9 shadow-inner transition ${currentValue ? "dark:bg-primary" : "dark:bg-[#5A616B]"}`}></div>
          <div
            className={`dot absolute -top-1 left-0 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${
              currentValue && "!right-0 !translate-x-full !bg-primary dark:!bg-white"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherTwo;
