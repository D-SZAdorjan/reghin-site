import React from "react";

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

const LongTextInput = ({ label = "Long Text Input", value, placeholder = "Default Text", inputKey, onChange, ...rest }: {
  label?: string
  placeholder?: string
  value?: string
  inputKey: keyof localeType;
  onChange: (value: string, key: keyof localeType) => void;
  [key: string]: any;
}) => {
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, inputKey)}
        value={value}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        {...rest}
      ></textarea>
    </>
  );
};

export default LongTextInput;
