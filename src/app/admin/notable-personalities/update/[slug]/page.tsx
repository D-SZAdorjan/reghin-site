"use client";
import {
  addNotablePersonAction,
  formDataType,
} from "@/actions/notablePersonalitiesActions";
import Breadcrumb from "@/components/Admin/Breadcrumb";
import TextInput from "@/components/Admin/FormInputs/TextInput";
import { NotablePersonality as Person, Prisma } from "@prisma/client";
import SwitcherTwo from "@/components/Admin/SwitcherTwo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SuperJSON from "superjson";
import { useParams } from "next/navigation";
import Image from "next/image";
import TextAreaInput from "@/components/Admin/FormInputs/TextAreaInput";

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

/**
 * This component is used to modify a Notable Personality.
 *
 * It fetches the initial data from the API based on the slug in the URL.
 * It displays the form with the initial data.
 * It handles the form submission with validation and POSTs the updated data to the API.
 */
const UpdateNotablePersonalityPage = () => {
  const [img, setImg] = useState<string>("");
  const [lead, setLead] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [description, setDescription] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });

  const [formData, setFormData] = useState<formDataType>({
    first_name: "",
    last_name: "",
    lead: "",
    image: null,
    description: "",
    priority: 0,
    publish: false,
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

  const handlePublishchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let valueBoolean: boolean;

    if (value === "true") {
      valueBoolean = true;
    } else if (value === "false") {
      valueBoolean = false;
    }

    setFormData((prevData) => ({
      ...prevData,
      publish: valueBoolean,
    }));
  };

  // Name validation function
  const validateName = (value: string): string | null => {
    const regex = /^[a-záéíóöőúüűăâîșțA-ZÁÉÍÓÖÓÚÚĂÂÎȘȚ\s]+$/;
    if (!regex.test(value)) {
      return "Please enter a valid name using only letters and spaces.";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters long.";
    }
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

  const handleLeadChange = (value: string, key: keyof localeType) => {
    // Update lead and formData synchronously
    setLead((prevLead) => {
      const updatedLead = {
        ...prevLead,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        lead: JSON.stringify(updatedLead),
      }));

      return updatedLead;
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData({
      ...formData,
      image: file, // Set the file or null if none is selected
    });
  };

  const handleDescriptionChange = (value: string, key: keyof localeType) => {
    setDescription((prevDescription) => {
      const updatedDescription = {
        ...prevDescription,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        description: JSON.stringify(updatedDescription),
      }));

      return updatedDescription;
    });
  };

  const { slug } = useParams();  // Get slug from the dynamic route

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/notable-personalities?id=${slug}`); // API call
        const jsonData = await response.json();
        const data = SuperJSON.deserialize<Person>(jsonData.data);
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          image: null,
          lead: JSON.stringify(data.occupation || {de:"", en: "", fr: "", hu: "", ro: ""}),
          description: JSON.stringify(data.description || {de:"", en: "", fr: "", hu: "", ro: ""}),
          priority: parseInt(data.priority!!.toString()),
          publish: data.published || false,
        });

        setImg(data.image!!);

        const typedOccupationData = data.occupation as { [key: string]: string };
        setLead({
          de: typedOccupationData.de || "", 
          en: typedOccupationData.en || "", 
          fr: typedOccupationData.fr || "", 
          hu: typedOccupationData.hu || "", 
          ro: typedOccupationData.ro || ""
        });
        
        const typedDescriptionData = data.description as { [key: string]: string };
        setDescription({
          de: typedDescriptionData.de || "", 
          en: typedDescriptionData.en || "", 
          fr: typedDescriptionData.fr || "", 
          hu: typedDescriptionData.hu || "", 
          ro: typedDescriptionData.ro || ""
        });

        console.log(description);
        

      } catch (error) {}
    };
    fetchData();  // Call the async function

    // Optional cleanup function (not always needed)
    return () => {
      setFormData({
        first_name: "",
        last_name: "",
        lead: "",
        image: null,
        description: "",
        priority: 0,
        publish: false,
      });  // Cleanup data if component unmounts or useEffect re-runs
    };
  }, []);  // Empty dependency array ensures this runs only once after the initial render

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //console.log(formData);
    
    const firstNameError = validateName(formData.first_name);
    const lastNameError = validateName(formData.last_name);
    const priorityError = validatePriority(formData.priority.toString());

    if (firstNameError || lastNameError || priorityError) {
      alert(
        `Please correct the errors before submitting the form. ${firstNameError} - ${lastNameError} - ${priorityError}`
      );
      return;
    }

    const apiData = new FormData();
    apiData.append("first_name", formData.first_name);
    apiData.append("last_name", formData.last_name);
    if (formData.image) {
      apiData.append("image", formData.image);  // Assuming formData.image is a file object
    }
    apiData.append("occupation", formData.lead);
    apiData.append("description", formData.description);
    apiData.append("priority", formData.priority.toString());
    apiData.append("publish", formData.publish.toString());

    try {
      const response = await axios.patch(
        `/api/notable-personalities?id=${slug}`, // Your route
        apiData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure this is set
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred during data modification:", error);
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
              Modify a Notable Personality
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <TextInput
                    label="First Name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <TextInput
                    label="Last name"
                    placeholder="Last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    validate={validateName}
                    type="text"
                    name="last_name"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Person Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                  />
                  {img && (
                    <div>
                      <Image
                        src={img}
                        width={300}
                        height={300}
                        alt="Notable Person Image"
                      ></Image>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextAreaInput
                    label="Occupation DE"
                    value={lead.de}
                    inputKey="de"
                    onChange={handleLeadChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Occupation EN"
                    value={lead.en}
                    inputKey="en"
                    onChange={handleLeadChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Occupation FR"
                    value={lead.fr}
                    inputKey="fr"
                    onChange={handleLeadChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Occupation HU"
                    value={lead.hu}
                    inputKey="hu"
                    onChange={handleLeadChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Occupation RO"
                    value={lead.ro}
                    inputKey="ro"
                    onChange={handleLeadChange}
                  />
                </div>
              </div>

              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextAreaInput
                    label="Description DE"
                    value={description.de}
                    inputKey="de"
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Description EN"
                    value={description.en}
                    inputKey="en"
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Description FR"
                    value={description.fr}
                    inputKey="fr"
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Description HU"
                    value={description.hu}
                    inputKey="hu"
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Description RO"
                    value={description.ro}
                    inputKey="ro"
                    onChange={handleDescriptionChange}
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
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

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Publish
                  </label>
                  <SwitcherTwo
                    id="toggle2"
                    label="Publish"
                    currentValue={formData.publish}
                    onChange={handlePublishchange}
                    name="publish"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex min-w-[20%] justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateNotablePersonalityPage;
