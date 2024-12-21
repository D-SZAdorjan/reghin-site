"use client"

import React, { useState } from 'react'

export type InputType = 'text' | 'email' | 'number'; //Defining alloweds input types

const TextInput = ({ label, placeholder, value, type, onChange, validate, ...rest } : {
    label: string; 
    placeholder: string; 
    value: string; 
    type?: InputType; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    validate: (value: string) => string | null;
    [key: string]: any;
}) => {
    const [error, setError] = useState<string | null>(null);

    // Handle Input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);

        //Validate the input
        const validationError = validate(e.target.value);
        setError(validationError);
    }
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        value={value}
        onChange={handleChange}
        className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition ${
          error ? "focus:border-danger" : "focus:border-primary"
        } ${
          error ? "active:border-danger" : "active:border-primary"
        } disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white ${
          error ? "dark:focus:border-danger" : "dark:focus:border-primary"
        }`}
        {...rest}
        placeholder={placeholder}
      />
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </>
  );
}

export default TextInput