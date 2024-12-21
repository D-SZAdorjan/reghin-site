"use client";
import Breadcrumb from "@/components/Admin/Breadcrumb";
import LongTextInput from "@/components/Admin/FormInputs/LongTextInput";
import TextAreaInput from "@/components/Admin/FormInputs/TextAreaInput";
import TextInput from "@/components/Admin/FormInputs/TextInput";
import SelectGroupOne from "@/components/Admin/SelectGroupOne";
import SwitcherTwo from "@/components/Admin/SwitcherTwo";
import { Article, ArticleCategory } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SuperJSON from "superjson";

interface formDataType {
  title: string;
  subtitle: string;
  image: File | null;
  lead: string;
  content: string;
  start_date: Date | null;
  end_date: Date | null;
  category: string;
  publish: boolean;
}

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

const UpdateArticlePage = () => {
  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [subTitle, setSubTitle] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [lead, setLead] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });
  const [content, setContent] = useState<localeType>({
    de: "",
    en: "",
    fr: "",
    hu: "",
    ro: "",
  });

  const [formData, setFormData] = useState<formDataType>({
    title: "",
    subtitle: "",
    image: null,
    lead: "",
    content: "",
    start_date: new Date(),
    end_date: new Date(),
    category: "",
    publish: false,
  });

  const [categoryList, setCategoryList] = useState<Map<bigint, JsonValue>>(
    new Map<bigint, JsonValue>()
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStartDateChange = (date: Date | null) => {
    console.log(date);

    setFormData((prevData) => ({
      ...prevData,
      start_date: date,
    }));
  };

  const handleEndDateChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      end_date: date,
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

  const validateTitle = (value: string): string | null => {
    return null;
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

  const handleTitleChange = (value: string, key: keyof localeType) => {
    // Update title and formData synchronously
    setTitle((prevTitle) => {
      const updatedTitle = {
        ...prevTitle,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        title: JSON.stringify(updatedTitle),
      }));

      return updatedTitle;
    });
  };

  const handleSubTitleChange = (value: string, key: keyof localeType) => {
    // Update SubTitle and formData synchronously
    setSubTitle((prevSubTitle) => {
      const updatedSubTitle = {
        ...prevSubTitle,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        subtitle: JSON.stringify(updatedSubTitle),
      }));

      return updatedSubTitle;
    });
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

  const handleContentChange = (value: string, key: keyof localeType) => {
    setContent((prevContent) => {
      const updatedContent = {
        ...prevContent,
        [key]: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        content: JSON.stringify(updatedContent),
      }));

      return updatedContent;
    });
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
          `http://localhost:3000/api/article-categories`
        ); // API call
        const categoryJsonData = await categoryResponse.json();
        const categoryData = SuperJSON.deserialize<ArticleCategory[]>(
          categoryJsonData.data
        );

        const articleCategoryMap = new Map<bigint, JsonValue>();
        categoryData.forEach((element) => {
          articleCategoryMap.set(element.id, element.name);
        });

        setCategoryList(articleCategoryMap);

        const response = await fetch(
          `http://localhost:3000/api/articles?id=${slug}`
        ); // API call
        const jsonData = await response.json();
        const data = SuperJSON.deserialize<Article>(jsonData.data);

        setFormData({
          title: JSON.stringify(
            data.title || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          subtitle: JSON.stringify(
            data.subtitle || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          image: null,
          lead: JSON.stringify(
            data.lead || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          content: JSON.stringify(
            data.content || { de: "", en: "", fr: "", hu: "", ro: "" }
          ),
          start_date: data.start_date || new Date(),
          end_date: data.end_date || new Date(),
          publish: data.published || false,
          category: data.category_id?.toString() || "",
        });
        
        setImg(data.image!!);

        const typedTitleData = data.title as {
          [key: string]: string;
        };
        setTitle({
          de: typedTitleData.de || "",
          en: typedTitleData.en || "",
          fr: typedTitleData.fr || "",
          hu: typedTitleData.hu || "",
          ro: typedTitleData.ro || "",
        });

        const typedSubTitleData = data.subtitle as {
          [key: string]: string;
        };
        setSubTitle({
          de: typedSubTitleData.de || "",
          en: typedSubTitleData.en || "",
          fr: typedSubTitleData.fr || "",
          hu: typedSubTitleData.hu || "",
          ro: typedSubTitleData.ro || "",
        });

        const typedLeadData = data.lead as {
          [key: string]: string;
        };
        setLead({
          de: typedLeadData.de || "",
          en: typedLeadData.en || "",
          fr: typedLeadData.fr || "",
          hu: typedLeadData.hu || "",
          ro: typedLeadData.ro || "",
        });

        const typedContentData = data.content as {
          [key: string]: string;
        };
        setContent({
          de: typedContentData.de || "",
          en: typedContentData.en || "",
          fr: typedContentData.fr || "",
          hu: typedContentData.hu || "",
          ro: typedContentData.ro || "",
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once after the initial render

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const apiData = new FormData();
      apiData.append("title", formData.title);
      apiData.append("subtitle", formData.subtitle);
      if (formData.image) {
        apiData.append("image", formData.image); // Assuming formData.image is a file object
      }
      apiData.append("lead", formData.lead);
      apiData.append("content", formData.content);
      apiData.append("category", formData.category);
      apiData.append("publish", formData.publish.toString());

      try {
        const response = await axios.patch(
          `/api/articles?id=${slug}`, // Your route
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
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  console.log("update page: ",formData.category);
  
  return (
    <>
      <Breadcrumb pageName="Create" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="text-2xl text-black dark:text-white">
              Modify an Article
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="w-full">
                  <TextInput
                    label="Title DE"
                    placeholder="Title DE"
                    value={title.de}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitleChange(event.target.value, "de")
                    }
                    validate={validateTitle}
                    type="text"
                    name="title_de"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Title EN"
                    placeholder="Title EN"
                    value={title.en}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitleChange(event.target.value, "en")
                    }
                    validate={validateTitle}
                    type="text"
                    name="title_en"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Title FR"
                    placeholder="Title FR"
                    value={title.fr}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitleChange(event.target.value, "fr")
                    }
                    validate={validateTitle}
                    type="text"
                    name="title_fr"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Title HU"
                    placeholder="Title HU"
                    value={title.hu}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitleChange(event.target.value, "hu")
                    }
                    validate={validateTitle}
                    type="text"
                    name="title_hu"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Title RO"
                    placeholder="Title RO"
                    value={title.ro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitleChange(event.target.value, "ro")
                    }
                    validate={validateTitle}
                    type="text"
                    name="title_ro"
                  />
                </div>
              </div>
              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="w-full">
                  <TextInput
                    label="Subtitle DE"
                    placeholder="Subtitle DE"
                    value={subTitle.de}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSubTitleChange(event.target.value, "de")
                    }
                    validate={validateTitle}
                    type="text"
                    name="subtitle_de"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Subtitle EN"
                    placeholder="Subtitle EN"
                    value={subTitle.en}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSubTitleChange(event.target.value, "en")
                    }
                    validate={validateTitle}
                    type="text"
                    name="subtitle_en"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Subtitle FR"
                    placeholder="Subtitle FR"
                    value={subTitle.fr}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSubTitleChange(event.target.value, "fr")
                    }
                    validate={validateTitle}
                    type="text"
                    name="subtitle_fr"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Subtitle HU"
                    placeholder="Subtitle HU"
                    value={subTitle.hu}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSubTitleChange(event.target.value, "hu")
                    }
                    validate={validateTitle}
                    type="text"
                    name="subtitle_hu"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Subtitle RO"
                    placeholder="Subtitle RO"
                    value={subTitle.ro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSubTitleChange(event.target.value, "ro")
                    }
                    validate={validateTitle}
                    type="text"
                    name="subtitle_ro"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Article Image
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
                  <LongTextInput
                    label="Lead DE"
                    value={lead.de}
                    inputKey="de"
                    onChange={handleLeadChange}
                    rows={4}
                  />
                </div>
                <div className="">
                  <LongTextInput
                    label="Lead EN"
                    value={lead.en}
                    inputKey="en"
                    onChange={handleLeadChange}
                    rows={4}
                  />
                </div>
                <div className="">
                  <LongTextInput
                    label="Lead FR"
                    value={lead.fr}
                    inputKey="fr"
                    onChange={handleLeadChange}
                    rows={4}
                  />
                </div>
                <div className="">
                  <LongTextInput
                    label="Lead HU"
                    value={lead.hu}
                    inputKey="hu"
                    onChange={handleLeadChange}
                    rows={4}
                  />
                </div>
                <div className="">
                  <LongTextInput
                    label="Lead RO"
                    value={lead.ro}
                    inputKey="ro"
                    onChange={handleLeadChange}
                    rows={4}
                  />
                </div>
              </div>
              <div className="mb-4.5 grid grid-cols-2 gap-4 justify-center">
                <div className="">
                  <TextAreaInput
                    label="Content DE"
                    value={content.de}
                    inputKey="de"
                    onChange={handleContentChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Content EN"
                    value={content.en}
                    inputKey="en"
                    onChange={handleContentChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Content FR"
                    value={content.fr}
                    inputKey="fr"
                    onChange={handleContentChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Content HU"
                    value={content.hu}
                    inputKey="hu"
                    onChange={handleContentChange}
                  />
                </div>
                <div className="">
                  <TextAreaInput
                    label="Content RO"
                    value={content.ro}
                    inputKey="ro"
                    onChange={handleContentChange}
                  />
                </div>
              </div>
              {/* Date Picker Goes Here */}
              <div className="mb-4 5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <SelectGroupOne
                    onChange={handleCategorySelectChange}
                    optionText="Select a Category"
                    defaultValue={formData.category}
                    label="Category"
                    options={categoryList}
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

export default UpdateArticlePage;
