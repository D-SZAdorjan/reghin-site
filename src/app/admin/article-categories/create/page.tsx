"use client";
import Breadcrumb from "@/components/Admin/Breadcrumb";
import TextInput from "@/components/Admin/FormInputs/TextInput";
import axios from "axios";
import React, { useState } from "react";

interface formDataType {
    name: string,
    priority: number
}

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

const CreateArticleCategoryPage = () => {
  const [name, setName] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    priority: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Name validation function
  const validateName = (value: string): string | null => {
    return null;
  };

  const validatePriority = (value: string): string | null => {
    if (isNaN(Number(value))) {
      return "Please provide a numeric value.";
    }
    if (Number(value) <= 0) {
      return "Please provide a value that is bigger than 0.";
    }
    return null;
  };

  const handleNameChange = (value: string, key: keyof localeType) => {
    // Update lead and formData synchronously
    setName((prevName) => {
      const updatedName = {
        ...prevName,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        name: JSON.stringify(updatedName),
      }));

      return updatedName;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    
    const nameError = validateName(formData.name);
    const priorityError = validatePriority(formData.priority.toString());

    if (nameError || priorityError) {
      alert(
        `Please correct the errors before submitting the form. ${nameError} - ${priorityError}`
      );
      return;
    }

    const apiData = new FormData();
    apiData.append("name", formData.name);
    apiData.append("priority", formData.priority.toString());

    try {
      const response = await axios.post(
        `/api/article-categories`, // Your route
        apiData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure this is set
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred during data creation:", error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Create" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="text-2xl text-black dark:text-white">
              Add an Article Category
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="w-full">
                  <TextInput
                    label="Name DE"
                    placeholder="Name DE"
                    value={name.de}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value, "de")}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Name EN"
                    placeholder="Name EN"
                    value={name.en}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value, "en")}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Name FR"
                    placeholder="Name FR"
                    value={name.fr}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value, "fr")}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Name HU"
                    placeholder="Name HU"
                    value={name.hu}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value, "hu")}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Name RO"
                    placeholder="Name RO"
                    value={name.ro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value, "ro")}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <TextInput
                    label="Priority"
                    placeholder="Priority (0 ... 99)"
                    value={formData.priority.toString()}
                    onChange={handleChange}
                    validate={validatePriority}
                    type="number"
                    min={1}
                    name="priority"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex min-w-[20%] justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateArticleCategoryPage;
