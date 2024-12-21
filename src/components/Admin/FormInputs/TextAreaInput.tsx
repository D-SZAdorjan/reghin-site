import { Editor} from '@tinymce/tinymce-react';
import { useState } from "react";

interface localeType {
  de: string;
  en: string;
  fr: string;
  hu: string;
  ro: string;
}

const TextAreaInput = ({ label, value, inputKey, onChange, ...rest } : {
  label: string;
  value?: string;
  inputKey: keyof localeType
  onChange: (value: string, key: keyof localeType) => void; 
  [key: string]: any;
}) => {
  function handleChange(e: string) {
    onChange(e, inputKey);
  }
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <Editor
        apiKey="tg7335ydxrmn7ukpmwzalfccqk7tmnzhjyur4ypxhn6ghiuo"
        initialValue={value || ""}
        init={{
          height: 300,
          skin: "oxide-dark",
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleChange}
      />
    </>
  );
}

export default TextAreaInput