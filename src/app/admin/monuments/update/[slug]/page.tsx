"use client";
import Breadcrumb from "@/components/Admin/Breadcrumb";
import TextAreaInput from "@/components/Admin/FormInputs/TextAreaInput";
import TextInput from "@/components/Admin/FormInputs/TextInput";
import SelectGroupOne from "@/components/Admin/SelectGroupOne";
import SwitcherTwo from "@/components/Admin/SwitcherTwo";
import { Monument, MonumentCategory } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SuperJSON from "superjson";

interface formDataType {
  name: string;
  image: File | null;
  description: string;
  open_hours: string;
  address: string;
  contact_info: string;
  is_visitable: boolean;
  map_link: string;
  priority: number;
  publish: boolean;
  category: string;
}

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

const UpdateMonumentPage = () => {
  const [img, setImg] = useState<string>("");
  const [name, setName] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [address, setAddress] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [openHours, setOpenHours] = useState<localeType>({
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
  const [contactInfo, setContactInfo] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });

  const [categoryList, setCategoryList] = useState<Map<bigint, JsonValue>>(
    new Map<bigint, JsonValue>()
  );

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    image: null,
    description: "",
    open_hours: "",
    address: "",
    contact_info: "",
    is_visitable: false,
    map_link: "",
    priority: 0,
    publish: false,
    category: "0",
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
    console.log("Hello from publish change");

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

  const handleIsVisitablechange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    console.log("Hello from is visitable change");

    let valueBoolean: boolean;

    if (value === "true") {
      valueBoolean = true;
    } else if (value === "false") {
      valueBoolean = false;
    }

    setFormData((prevData) => ({
      ...prevData,
      is_visitable: valueBoolean,
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

  const handleAddressChange = (value: string, key: keyof localeType) => {
    // Update lead and formData synchronously
    setAddress((prevAddress) => {
      const updatedAddress = {
        ...prevAddress,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        address: JSON.stringify(updatedAddress),
      }));

      return updatedAddress;
    });
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

  const handleOpenHoursChange = (value: string, key: keyof localeType) => {
    // Update openHours and formData synchronously
    setOpenHours((prevOH) => {
      const updatedOH = {
        ...prevOH,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        open_hours: JSON.stringify(updatedOH),
      }));

      return updatedOH;
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

  const handleContactInfoChange = (value: string, key: keyof localeType) => {
    setContactInfo((prevContactInfo) => {
      const updatedContactInfo = {
        ...prevContactInfo,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        contact_info: JSON.stringify(updatedContactInfo),
      }));

      return updatedContactInfo;
    });
  };

  const validateMapLink = (value: string): string | null => {
    return null;
  };

  const handleCategorySelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const { slug } = useParams(); // Get slug from the dynamic route

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_ROUTE}monument-categories`
        ); // API call
        const categoryJsonData = await categoryResponse.json();
        const categorytData = SuperJSON.deserialize<MonumentCategory[]>(
          categoryJsonData.data
        );

        const monumentCategoryMap = new Map<bigint, JsonValue>();
        categorytData.forEach((element) => {
          monumentCategoryMap.set(element.id, element.name);
        });

        setCategoryList(monumentCategoryMap);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_ROUTE}monuments?id=${slug}`
        ); // API call
        const jsonData = await response.json();
        const data = SuperJSON.deserialize<Monument>(jsonData.data);
        setFormData({
          name: JSON.stringify(
            data.name || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          image: null,
          description: JSON.stringify(
            data.description || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          open_hours: JSON.stringify(
            data.open_hours || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          address: JSON.stringify(
            data.address || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          contact_info: JSON.stringify(
            data.contact_info || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          is_visitable: data.is_visitable || false,
          map_link: data.map_link || "",
          priority: parseInt(data.priority!!.toString()),
          publish: data.published || false,
          category: data.category_id?.toString() || "",
        });

        setImg(data.image!!);

        const typedNameData = data.name as {
          [key: string]: string;
        };
        setName({
          de: typedNameData.de || "",
          en: typedNameData.en || "",
          fr: typedNameData.fr || "",
          hu: typedNameData.hu || "",
          ro: typedNameData.ro || "",
        });

        const typedDescriptionData = data.description as {
          [key: string]: string;
        };
        setDescription({
          de: typedDescriptionData.de || "",
          en: typedDescriptionData.en || "",
          fr: typedDescriptionData.fr || "",
          hu: typedDescriptionData.hu || "",
          ro: typedDescriptionData.ro || "",
        });

        const typedOpenHoursData = data.open_hours as {
            [key: string]: string;
          };
        setOpenHours({
          de: typedOpenHoursData.de || "",
          en: typedOpenHoursData.en || "",
          fr: typedOpenHoursData.fr || "",
          hu: typedOpenHoursData.hu || "",
          ro: typedOpenHoursData.ro || "",
        });

        const typedAddressData = data.address as {
            [key: string]: string;
          };
        setAddress({
          de: typedAddressData.de || "",
          en: typedAddressData.en || "",
          fr: typedAddressData.fr || "",
          hu: typedAddressData.hu || "",
          ro: typedAddressData.ro || "",
        });

        const typedContactInfoData = data.open_hours as {
            [key: string]: string;
          };
        setContactInfo({
          de: typedContactInfoData.de || "",
          en: typedContactInfoData.en || "",
          fr: typedContactInfoData.fr || "",
          hu: typedContactInfoData.hu || "",
          ro: typedContactInfoData.ro || "",
        });

        console.log(description);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the async function
  }, [slug]); // Empty dependency array ensures this runs only once after the initial render

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    const priorityError = validatePriority(formData.priority.toString());

    if (priorityError) {
      alert(
        `Please correct the errors before submitting the form. ${priorityError}`
      );
      return;
    }

    const apiData = new FormData();
    apiData.append("name", formData.name);
    if (formData.image) {
      apiData.append("image", formData.image); // Assuming formData.image is a file object
    }
    apiData.append("description", formData.description);
    apiData.append("open_hours", formData.open_hours);
    apiData.append("address", formData.address);
    apiData.append("contact_info", formData.contact_info);
    apiData.append("is_visitable", formData.is_visitable.toString());
    apiData.append("map_link", formData.map_link);
    apiData.append("priority", formData.priority.toString());
    apiData.append("publish", formData.publish.toString());
    apiData.append("category", formData.category);

    try {
      const response = await axios.patch(
        `/api/monuments?id=${slug}`, // Your route
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
              Add a Monument
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextInput
                    label="Name DE"
                    placeholder="Name DE"
                    value={name.de}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleNameChange(event.target.value, "de")
                    }
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Name EN"
                    placeholder="Name EN"
                    value={name.en}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleNameChange(event.target.value, "en")
                    }
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Name FR"
                    placeholder="Name FR"
                    value={name.fr}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleNameChange(event.target.value, "fr")
                    }
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Name HU"
                    placeholder="Name HU"
                    value={name.hu}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleNameChange(event.target.value, "hu")
                    }
                    validate={validateName}
                    type="text"
                    name="first_name"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Name RO"
                    placeholder="Name RO"
                    value={name.ro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleNameChange(event.target.value, "ro")
                    }
                    validate={validateName}
                    type="text"
                    name="last_name"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Monument Image
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
                        alt="Monument Image"
                      ></Image>
                    </div>
                  )}
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
                    label="Description RO"
                    value={description.ro}
                    inputKey="ro"
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
              </div>

              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextAreaInput
                    label="Open Hours DE"
                    value={openHours.de}
                    inputKey="de"
                    onChange={handleOpenHoursChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Open Hours EN"
                    value={openHours.en}
                    inputKey="en"
                    onChange={handleOpenHoursChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Open Hours FR"
                    value={openHours.fr}
                    inputKey="fr"
                    onChange={handleOpenHoursChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Open Hours HU"
                    value={openHours.hu}
                    inputKey="hu"
                    onChange={handleOpenHoursChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Open Hours RO"
                    value={openHours.ro}
                    inputKey="ro"
                    onChange={handleOpenHoursChange}
                  />
                </div>
              </div>

              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextInput
                    label="Address DE"
                    placeholder="Address DE"
                    value={address.de}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressChange(event.target.value, "de")
                    }
                    validate={validateName}
                    type="text"
                    name="address_de"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Address EN"
                    placeholder="Address EN"
                    value={address.en}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressChange(event.target.value, "en")
                    }
                    validate={validateName}
                    type="text"
                    name="address_en"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Address FR"
                    placeholder="Address FR"
                    value={address.fr}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressChange(event.target.value, "fr")
                    }
                    validate={validateName}
                    type="text"
                    name="address_fr"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Address HU"
                    placeholder="Address HU"
                    value={address.hu}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressChange(event.target.value, "hu")
                    }
                    validate={validateName}
                    type="text"
                    name="address_hu"
                  />
                </div>
                <div className="">
                  <TextInput
                    label="Address RO"
                    placeholder="Address RO"
                    value={address.ro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressChange(event.target.value, "ro")
                    }
                    validate={validateName}
                    type="text"
                    name="address_ro"
                  />
                </div>
              </div>

              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextAreaInput
                    label="Contact Info DE"
                    value={contactInfo.de}
                    inputKey="de"
                    onChange={handleContactInfoChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Contact Info EN"
                    value={contactInfo.en}
                    inputKey="en"
                    onChange={handleContactInfoChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Contact Info FR"
                    value={contactInfo.fr}
                    inputKey="fr"
                    onChange={handleContactInfoChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Contact Info HU"
                    value={contactInfo.hu}
                    inputKey="hu"
                    onChange={handleContactInfoChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Contact Info RO"
                    value={contactInfo.ro}
                    inputKey="ro"
                    onChange={handleContactInfoChange}
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
                    Is Visitable
                  </label>
                  <SwitcherTwo
                    id="isVisitableSwitcher"
                    label="Is Visitable"
                    currentValue={formData.is_visitable}
                    onChange={handleIsVisitablechange}
                    name="is_visitable"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <TextInput
                    label="Google Maps Link"
                    placeholder="http://google.maps.com/"
                    value={formData.map_link}
                    onChange={handleChange}
                    validate={validateMapLink}
                    type="text"
                    name="map_link"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Publish
                  </label>
                  <SwitcherTwo
                    id="publishSwitcher"
                    label="Publish"
                    currentValue={formData.publish}
                    onChange={handlePublishchange}
                    name="publish"
                  />
                </div>
              </div>
              <div className="mb-4 5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <SelectGroupOne
                    onChange={handleCategorySelectChange}
                    optionText="Select a Category"
                    defaultValue={formData.category}
                    label="Category"
                    options={categoryList}
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

export default UpdateMonumentPage;
